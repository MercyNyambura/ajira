import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { applyJob, getApplicationsForJob } from "../controllers/applicationController.js";
const router = express.Router();

router.post("/", protect, applyJob);
router.get("/job/:jobId", protect, getApplicationsForJob);

export default router;
