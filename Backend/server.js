import express from "express";
import cors from "cors";
import { connectDB } from "./Config/DB.js";
import foodRouter from "./Routes/FoodRoute.js";

//Config - App
const app = express();
const PORT = 4000;

//Middle-ware

app.use(express.json());
app.use(cors());

//DB connection
connectDB();

//Api end-point
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.write("<h1>Hello Guys</h1>");
  res.send();
});

app.listen(PORT, () => {
  console.log(`server is runs on port:${PORT}`);
});

//Database - mongodb+srv://shankar:shankar@cluster0.veb6r.mongodb.net/?
