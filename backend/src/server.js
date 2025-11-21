import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { initSocket } from "./sockets/index.js";

dotenv.config();
const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_URL || "*" }));
app.use(express.json());
app.use(mongoSanitize());
app.use(xss());
app.use(morgan("dev"));

connectDB();

app.get("/health", (req, res) => res.json({ status: "ok" }));

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/messages", messageRoutes);

const io = new Server(server, { cors: { origin: process.env.FRONTEND_URL || "*" } });
initSocket(io);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
