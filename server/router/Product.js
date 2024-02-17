import express from "express";
import { createProduct, fetchAllProduct, fetchProductById } from "../controller/Prodcut.js";
export const productRouter = express.Router();

productRouter
  .post("/", createProduct)
  .get("/:id", fetchProductById)
  .get("/", fetchAllProduct);
