import mongoose from "mongoose";

const brandSchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

const Brand=new mongoose.model("Brand",brandSchema)

export default Brand;