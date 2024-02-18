import express from "express";
import { addCategory, fetchCategory } from "../controller/Category.js";

export const categoryRouter = express.Router();

categoryRouter.post("/", addCategory).get("/", fetchCategory);
