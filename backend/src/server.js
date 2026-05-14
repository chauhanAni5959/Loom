import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/api/auth", authRoutes);
// ->userRoutes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
