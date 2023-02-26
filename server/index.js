import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";
import authRoutes from "./routes/auth.js";
import rateLimit from 'express-rate-limit';
import cookieParser from "cookie-parser";
import EventEmitter from "events";
import cors from "cors";

const app = express();
dotenv.config();

// const limiter = rateLimit({
// 	windowMs: 15 * 60 * 1000, // 15 minutes
// 	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// });

// const myEmitter = new EventEmitter();

// // Set the maximum number of listeners to 20
// myEmitter.setMaxListeners(20);

// // Register 15 listeners for the 'my-event' event
// for (let i = 0; i < 15; i++) {
//   myEmitter.on('my-event', () => {
//     console.log('Listener called');
//   });
// }

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };

// authRoutes.use(logger);
// userRoutes.use(logger);
// videoRoutes.use(logger);
// commentRoutes.use(logger);

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

app.get('/', (req, res) => {
    res.send("Hello word")
});

// Use ExpressJs
app.use(cors());
app.use(cookieParser());
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded(
    {   limit: '50mb',
        extended: true,
        parameterLimit: 50000,
    }
));
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/comments", commentRoutes);

app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong! 😞";

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')

    next();

    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

app.listen(8000, () => {
    connect();
    console.log(`Server has started on port http://localhost:8000`)
});
