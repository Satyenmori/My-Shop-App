import mongoose from "mongoose";

export const connDB=async()=>{
    try {
        await mongoose.connect(process.env.URI);
        console.log("DB connected succesfuly");
    } catch (error) {
        console.log("DB Not Connected");
    }
}