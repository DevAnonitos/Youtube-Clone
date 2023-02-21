import { createError } from "../error.js";
import User from "../models/User.js";

export const update = (req, res, next) => {
    if(req.params.id === req.user.id) {
        // toDO
        try {

        } catch (error) {
            
        }
    } else {
        return next(createError(403, "You can update only your account"));
    }
};

export const deleteUser = (req, res, next) => {
    res.json("It's successfull")
};

export const getUser = (req, res, next) => {
    res.json("It's successfull")
};

export const subscribe = (req, res, next) => {
    res.json("It's successfull")
};

export const unsubscribe = (req, res, next) => {
    res.json("It's successfull")
};

export const like = (req, res, next) => {
    res.json("It's successfull")
};

export const dislike = (req, res, next) => {
    res.json("It's successfull")
};

