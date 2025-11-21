import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createJob, getJobs, getJob, updateJob, deleteJob } from "../controllers/jobController.js";
const router = express.Router();

router.get("/", getJobs);
router.post("/", protect, createJob);
router.get("/:id", getJob);
router.put("/:id", protect, updateJob);
router.delete("/:id", protect, deleteJob);

export default router;
