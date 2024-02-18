import express from "express";
import { addBrand, fetchBrand } from "../controller/Brand.js";

export const brandRouter = express.Router();

brandRouter.post("/", addBrand).get("/", fetchBrand);
