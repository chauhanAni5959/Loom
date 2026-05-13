import jwt, { decode } from "jsonwebtoken";
import User from "../models/User.js";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }

    // check the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // check the token is valid or not
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid token" });
    }
    // take the user from the string
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("Error in protectRoute Middleware", error);
    res.status(500).json({ message: "Internal server error " });
  }
};
