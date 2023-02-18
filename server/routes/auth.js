import express from "express";
import { signUp } from "../controllers/auth.js";

const router = express.Router();

// Create a users
router.post("/signup", signUp);
// Sign in
router.post("/signin")
// Google Auth
router.post("/google")

export default router;
