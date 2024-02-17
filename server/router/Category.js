import express from "express";
import { addCategory } from "../controller/Category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", addCategory);
