import express from "express";
import {
    addVideo,
    updateVideo,
    deleteVideo,
    getVideo,
    getByTag,
    addView,
    rand,
    search,
    sub,
    trend
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";
import cors from "cors";

const router = express.Router();
// AddVideo
router.post("/", verifyToken, addVideo);
// UpdateVideo
router.put("/:id", verifyToken, updateVideo);
// DeletedVideo
router.delete("/:id", deleteVideo);
// GetVideo
router.get("/find/:id", getVideo);
// AddView
router.put("/view/:id", addView);
// Trend
router.get("/trend", trend);
// Rand
router.get("/random", rand);
// Sub
router.get("/sub", verifyToken, sub);
// GetByTag
router.get("/tags", getByTag);
// Search
router.get("/search", search);

export default router;
