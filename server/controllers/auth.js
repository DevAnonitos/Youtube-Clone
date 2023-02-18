import mongoose from "mongoose";
import User from "../models/User.js";
import bcrypt from "bcryptjs";

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

export const signUp = async (req, res) => {

    console.log(req.body);

    try {

        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const newUser = new User({ ...req.body, password: hash });

        await newUser.save();

        res.status(200).send("User has been created!");
    } catch (error) {
        console.log(error.message);
    }

};
