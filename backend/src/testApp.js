import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";

export default async function createTestApp() {
  const app = express();
  app.use(express.json());
  app.use("/api/auth", authRoutes);
  app.use("/api/jobs", jobRoutes);
  app.use("/api/applications", applicationRoutes);
  app.use("/api/messages", messageRoutes);
  app.use(errorHandler);
  return { app };
}
