import express from "express";
import {
    addVideo,
    updateVideo,
    deleteVideo,
    getVideo
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, addVideo);
router.put("/:id", verifyToken, updateVideo);
router.delete("/:id", deleteVideo);
router.get("/find/:id", getVideo);

export default router;
