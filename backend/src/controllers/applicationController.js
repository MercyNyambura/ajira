import asyncHandler from "express-async-handler";
import Application from "../models/Application.js";

export const applyJob = asyncHandler(async (req, res) => {
  const { jobId, coverLetter, resumeUrl } = req.body;
  const app = await Application.create({ applicant: req.user._id, job: jobId, coverLetter, resumeUrl });
  res.status(201).json(app);
});

export const getApplicationsForJob = asyncHandler(async (req, res) => {
  const apps = await Application.find({ job: req.params.jobId }).populate("applicant", "name email");
  res.json(apps);
});
