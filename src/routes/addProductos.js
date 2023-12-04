import { Router } from "express";
import productModel from "../schemas/schemas.js";

const router = Router();

router.post("/", async (req, res) => {
  try {
    let { nombre, categoria, precio, stock, imagen } = req.body;
    req.logger.info("logger info add product");
    console.log("test 1: producto sin nombre");
    console.log("test 2: producto sin categoria");
    console.log("test 3: producto sin precio");
    console.log("test 4: producto sin cantidad");
    console.log("test 5: producto sin imagen");

    if (!nombre) {
      console.log("test 1: no paso");
      return res.status(500).send({ status: "error", error: "Error interno del servidor" });
    } else if (!categoria) {
      console.log("test 1 OK");
      console.log("test 2: no paso");
      return res.status(500).send({ status: "error", error: "Error interno del servidor" });
    } else if (!precio) {
      console.log("test 1 OK");
      console.log("test 2 OK");
      console.log("test 3: no paso");
      return res.status(500).send({ status: "error", error: "Error interno del servidor" });
    } else if (!stock) {
      console.log("test 1 OK");
      console.log("test 2 OK");
      console.log("test 3 OK");
      console.log("test 4: no paso");
      return res.status(500).send({ status: "error", error: "Error interno del servidor" });
    } else if (!imagen) {
      console.log("test 1 OK");
      console.log("test 2 OK");
      console.log("test 3 OK");
      console.log("test 4 OK");
      console.log("test 5: no paso");
      return res.status(500).send({ status: "error", error: "Error interno del servidor" });
    } else {
      console.log("test 1 OK");
      console.log("test 2 OK");
      console.log("test 3 OK");
      console.log("test 4 OK");
      console.log("test 5 OK");
      let result = await productModel.create({ nombre, categoria, precio, stock, imagen });
      return res.send({ result: "success", payload: result });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({ status: "error", error: "Error interno del servidor" });
  }
});

export default router;
