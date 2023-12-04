import express from "express"
import mockRouter from "./routes/mockRoutes.js"
import productRoutes  from "./routes/addProductos.js"
import loggerTest from "./routes/loggerTest.js"
import mongoose from "mongoose"
import { createLogger, format, transports } from "winston"


const PORT = 8080
 
const app = express()

const devLogger = createLogger({
    level: "debug",
    format: format.simple(),
    transports: [new transports.Console()]
})

const prodLogger = createLogger({
    level: "info",
    format: format.simple(),
    transports: [new transports.Console(),
        new transports.File({
            filename:"error.log", level:"info"
        })
    ]
})

app.use (express.json())

mongoose.connect("mongodb+srv://nehuengiannone:Lz7n3cS0vO7ulfvk@cluster0.s1deur4.mongodb.net/?retryWrites=true&w=majority")
.then (() => {
    console.log("conexion exitosa a mongodb")
})
.catch(error => {
    console.error ("error de conexion", error)
})

app.use ((req, res, next) => {
    if (process.env.NODE_ENV === "production") {
    req.logger = prodLogger}
    
    else {
        req.logger = devLogger}
        next()
})
prodLogger.on('error', (err) => {
    console.error('Error en el logger de producción:', err);
});

app.use("/api/mockingproducts", mockRouter)
app.use ("/api/products", productRoutes)
app.use("/api/loggertest", loggerTest)

app.listen(PORT, () => {
    console.log('Servidor en ejecución en el puerto ' + PORT);
});

