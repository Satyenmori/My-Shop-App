import Category from "../model/Category.js";

export const addCategory = async (req, res) => {
  try {
    const category = new Category(req.body);
    const doc = await category.save();
    res.status(200).json({ msg: "Category is Save" });
  } catch (error) {
    res.status(500).json("Category Not add ", error);
  }
};

export const fetchCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json("categories not Find", error);
  }
};
