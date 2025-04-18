import mongoose from "mongoose";
 
 export const connectDB = async () => {
   await mongoose
     .connect(
       "mongodb+srv://shankar:shankar@cluster0.veb6r.mongodb.net/food-del"
     )
     .then(() => console.log("DB connected"));
 };