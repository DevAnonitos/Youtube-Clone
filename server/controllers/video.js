import User from "../models/User.js";
import Video from "../models/Video.js";
import { createError } from "../error.js";
// addVideo
export const addVideo = async (req, res, next) => {
    const newVideo = new Video({userId: req.user.id, ...req.body});
    try {

        const savedVideo = await newVideo.save();
        res.status(200).json(savedVideo);

    } catch (error) {
        next(error);
    }
};
// UpdateVideo
export const updateVideo = async (req, res, next) => {
    try {
        const video = await Video.findById(req.params.id);

        if(!video) return next(createError(404, "Video not found"));

        if(req.user.id === video.userId) {
            const updateVideo = await Video.findByIdAndUpdate(req.params.id,
                {
                    $set: req.body,
                },
                {new: true}
            );
            res.status(200).json(updateVideo);
        } else {
            return next(createError(403, "You can update only your video!"));
        }
    } catch (error) {
        next(error);
    }
};
// DeleteVideo
export const deleteVideo = async (req, res, next) => {
    try {

    } catch (error) {

    }
};
// GetVideo
export const getVideo = async (req, res, next) => {
    try {

    } catch (error) {

    }
};


