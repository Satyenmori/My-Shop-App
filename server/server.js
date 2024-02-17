import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connDB } from "./utility/db.js";
import { productRouter } from "./router/Product.js";
import { categoryRouter } from "./router/Category.js";
import { brandRouter } from "./router/Brand.js";

const app = express();

//middaleware
const corsOption = {
  origin: "http://localhost:3000",
  method: "GET,POST,PATCH,DELETE,HEAD,PUT",
  credentials: true,
};
app.use(cors(corsOption));
dotenv.config();
app.use(express.json());

// routing
app.use("/product", productRouter);
app.use("/category", categoryRouter);
app.use("/brand", brandRouter);

connDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("http://localhost:2222");
  });
});
