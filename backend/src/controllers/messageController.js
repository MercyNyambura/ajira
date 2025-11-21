import asyncHandler from "express-async-handler";
import Message from "../models/Message.js";

export const sendMessage = asyncHandler(async (req, res) => {
  const { to, jobId, text } = req.body;
  const msg = await Message.create({ from: req.user._id, to, job: jobId, text });
  res.status(201).json(msg);
});

export const getConversation = asyncHandler(async (req, res) => {
  const { userId } = req.params;
  const msgs = await Message.find({ $or: [{ from: req.user._id, to: userId }, { from: userId, to: req.user._id }] }).sort("createdAt");
  res.json(msgs);
});
