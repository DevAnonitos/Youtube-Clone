import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";
import jwt from "jsonwebtoken";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export const signUp = async (req, res, next) => {

    console.log(req.body);

    try {

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();

        res.status(200).send("User has been created! 😘");
    } catch (error) {
        next(error);
    }
};

export const signIn = async (req, res, next) => {

    console.log(req.body);

    try {
        const user = await User.findOne({name: req.body.name});
        if (!user) return next(createError(404, "User not found 🥲"));

        const isCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isCorrect) return next(createError(400, "Wrong Credentials 😃"));

        const token = jwt.sign({id:user._id}, process.env.JWT);

        res.cookie("Access-Token", token, {
            httpOnly: true
        }).status(200)
        .json(user);
    } catch (error) {
        next(error);
    }
};
