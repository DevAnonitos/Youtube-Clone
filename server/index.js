import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import rateLimit from 'express-rate-limit';

const app = express();
dotenv.config();

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};

authRoutes.use(logger);
userRoutes.use(logger);
videoRoutes.use(logger);
commentRoutes.use(logger);

const connect = () => {
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGO)
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        throw err;
    })
}

app.use(express.json());
app.use("/api/auth", limiter, authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);


app.listen(8000, () => {
    connect();
    console.log(`Server has started on port http://localhost:8000`)
});
