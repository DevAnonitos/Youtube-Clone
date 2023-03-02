import express from "express";
import { signIn, signUp, googleAuth } from "../controllers/auth.js";

const router = express.Router();

// Create a users
router.post("/signup", signUp);
// Sign in
router.post("/signin", signIn);
// Google Auth
router.post("/google", googleAuth);

export default router;
