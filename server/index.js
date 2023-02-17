import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/users.js";
import commentRoutes from "./routes/comments.js";
import videoRoutes from "./routes/videos.js";


const app = express();
dotenv.config();

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

app.use("/api/users", userRoutes)

app.listen(8000, () => {
    connect();
    console.log(`Server has started on port http://localhost:8000`)
});
