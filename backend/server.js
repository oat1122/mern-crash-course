import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import productRoutes from "./routes/procuct.route.js"; // ตรวจสอบการนำเข้า

dotenv.config();

const app = express();

app.use(express.json()); // Middleware to parse JSON body

app.use("/api/products", productRoutes); // ใช้เส้นทางที่ถูกต้อง

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
