import mongoose from "mongoose"

const productCallection = "products"


const productSchema = new mongoose.Schema({
    nombre: {type: String, required: true, max: 100}, 
    categoria: {type: String, required: true, max: 100},
    precio: {type: Number, required: true, max: 10000}, 
    stock: {type: Number, required: true, max: 100}, 
    imagen: {type: String, required: true, max: 100},  
    
})


const productModel = mongoose.model(productCallection, productSchema)


export default productModel