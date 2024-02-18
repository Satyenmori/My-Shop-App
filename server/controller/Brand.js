import Brand from "../model/Brand.js";
export const addBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    const doc = await brand.save();
    res.status(200).json({ msg: "Brand is Save" });
  } catch (error) {
    res.status(500).json("Brand Not add ", error);
  }
};

export const fetchBrand = async (req, res) => {
  try {
    const brand = await Brand.find({});
    res.status(200).json(brand);
  } catch (error) {
    res.status(500).json("Brand not find", error);
  }
};
