import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../error.js";

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
        console.log(error.message);
        next(err);
    }
};

export const signIn = async (req, res, next) => {

    console.log(req.body);

    try {
        const user = await User.findOne({name: req.body.name});

        if (!user) return next(createError(404, "User not found 🥲"))
    } catch (error) {
        console.log(error.message);
        next(err);
    }
};
