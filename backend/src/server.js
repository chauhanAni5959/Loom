import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.routes.js";
import chatRoutes from "./routes/chat.route.js";
import { connectDB } from "./lib/db.js";
const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow frontend to send cookies
  }),
);
// Middleware
app.use(express.json());
app.use(cookieParser());
// Routes
app.use("/api/auth", authRoutes);
// ->userRoutes
app.use("/api/users", userRoutes);
app.use("/api/user", userRoutes);
// ->chatRoutes
app.use("/api/chat", chatRoutes);

// for deploying 
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist","index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
