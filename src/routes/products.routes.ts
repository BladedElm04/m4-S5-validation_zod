import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createProductBodySchema } from "../schema/createProductBody.schema";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", ValidateBody.execute(createProductBodySchema), IsProductNameUnique.execute, productsControllers.createProduct);
