import express from "express";
import dotenv from "dotenv";

import { connDB } from "./utility/db.js";

const app = express();

//middaleware
dotenv.config();

connDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("http://localhost:2222");
  });
});
