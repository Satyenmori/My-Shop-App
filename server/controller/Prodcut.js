import Product from "../model/Product.js";

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const doc = await product.save();
    res.status(200).json({ msg: "Product saved Succsessfuly" });
  } catch (error) {
    res.status(500).json("product not store", error);
  }
};

// product fetch By Id get single product

export const fetchProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(200).json(error);
  }
};

// fetch All Product 

export const fetchAllProduct=async(req,res)=>{
  try {
    const product= await Product.find({})
    res.status(200).json(product)
  } catch (error) {
    res.status(500).json(error)
  }
}