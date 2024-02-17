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
