import express from "express";
import {
    update, deleteUser,
    getUser, subscribe,
    unsubscribe, like, dislike
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// Update User
router.put("/:id", verifyToken, update);

// Delete user
router.delete("/:id", deleteUser);
// Get a user
router.get("/:id", getUser);
// Subscribe a user
router.put("/sub/:id", subscribe);
// unsubscribe a user
router.put("/unsub/:id", unsubscribe);
// Like a video
router.put("/like/:videoId", like);
// Dislike a video
router.put("/dislike/:videoId", dislike);

export default router;
