import { Router } from "express";
import { ProductsControllers } from "../controllers/products.controllers";
import { IsProductNameUnique } from "../middlewares/isProductNameUnique.middleware";
import { IsCreateProductBodyValid } from "../middlewares/isCreateProductBodyValid.middleware";

export const productsRoutes = Router();

const productsControllers = new ProductsControllers();

productsRoutes.post("/", IsCreateProductBodyValid.execute, IsProductNameUnique.execute, productsControllers.createProduct);
