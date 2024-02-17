import express from "express";
import { addBrand } from "../controller/Brand.js";

export const brandRouter = express.Router();

brandRouter.post("/", addBrand);
