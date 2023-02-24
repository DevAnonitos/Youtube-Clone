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

        const video = await Video.findById(req.params.id);

        if(!video) return next(createError(404, "Video not found"));

        if(req.user.id === video.userId) {
            await Video.findByIdAndDelete(req.params.id);
            res.status(200).json("The video has been deleted!");
        } else {
            return next(createError(403, "You can delete only your video!"));
        }

    } catch (error) {
        next(error);
    }
};
// GetVideo
export const getVideo = async (req, res, next) => {
    try {

        const video = await Video.findById(req.params.id);
        res.status(200).json(video);

    } catch (error) {
        next(error);
    }
};
// addView
export const addView = async (req, res, next) => {
    try {
        await Video.findByIdAndUpdate(req.params.id, {
            $inc: {views:1}
        });
        res.status(200).json("The view has been increaser!");
    } catch (error) {
        next(error);
    }
};
// Random
export const rand = async (req, res, next) => {
    try {
        const videos = await Video.aggregate([{$sample:{size: 40}}]);
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
};
// Trend
export const trend = async (req, res, next) => {
    try {
        const videos = await Video.find().sort({views: -1});
        res.status(200).json(videos);
    } catch (error) {
        next(error);
    }
};
// Sub
export const sub = async (req, res, next) => {
    try {
      const user = await User.findById(req.user.id);
      const subscribedChannels = user.subscribedUsers;

      const list = await Promise.all(
        subscribedChannels.map(async (channelId) => {
          return await Video.find({ userId: channelId });
        })
      );

      res.status(200).json(list.flat().sort((a, b) => b.createdAt - a.createdAt));
    } catch (err) {
      next(err);
    }
  };
// tag
export const getByTag = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};
// search
export const search = async (req, res, next) => {
    try {

    } catch (error) {
        next(error);
    }
};
