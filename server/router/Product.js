import express from "express";
import { createProduct, fetchProductById } from "../controller/Prodcut.js";
export const productRouter = express.Router();

productRouter.post("/", createProduct).get("/:id", fetchProductById);
