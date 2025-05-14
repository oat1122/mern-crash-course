import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import path from 'path';
import productRoutes from "./routes/procuct.route.js"; // ตรวจสอบการนำเข้า

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json()); // Middleware to parse JSON body

app.use("/api/products", productRoutes); // ใช้เส้นทางที่ถูกต้อง

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')));
}


app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
