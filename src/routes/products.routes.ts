import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { Validate } from "../middlewares/validate.middleware";
import { createProductBodySchema } from "../schema/createProductBody.schema";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", Validate.execute({ body: createProductBodySchema }), IsProductNameUnique.execute, productsControllers.createProduct);
