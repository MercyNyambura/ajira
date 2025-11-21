import asyncHandler from "express-async-handler";
import Job from "../models/Job.js";

export const createJob = asyncHandler(async (req, res) => {
  const job = await Job.create({ ...req.body, employer: req.user._id });
  res.status(201).json(job);
});

export const getJobs = asyncHandler(async (req, res) => {
  const q = {};
  if (req.query.status) q.status = req.query.status;
  const jobs = await Job.find(q).populate("employer", "name email");
  res.json(jobs);
});

export const getJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id).populate("employer", "name email");
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

export const updateJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json(job);
});

export const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ message: "Job not found" });
  res.json({ message: "Deleted" });
});
