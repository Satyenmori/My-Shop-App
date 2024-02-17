import express from "express";
import dotenv from "dotenv";

import { connDB } from "./utility/db.js";
import { productRouter } from "./router/Product.js";
import { categoryRouter } from "./router/Category.js";
import { brandRouter } from "./router/Brand.js";

const app = express();

//middaleware
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
