import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  req.logger.info("logger info add product");
  console.log("test 1: producto sin nombre");
  console.log("test 2: producto sin categoria");
  console.log("test 3: producto sin precio");
  console.log("test 4: producto sin cantidad");
  console.log("test 5: producto sin imagen");
  req.logger.info("logger info mock");

  res.send({ status: "success", message: "Logs ejecutados exitosamente" });
});

export default router;