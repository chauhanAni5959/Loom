import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// it is going to protect all the routes before entering
router.use(protectRoute);

router.get("/", protectRoute, getRecommendedUsers);
router.get("/friends", getMyFriends);

export default router;
