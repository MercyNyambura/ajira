import jwt from "jsonwebtoken";
import Message from "../models/Message.js";
const online = new Map();

export const initSocket = (io) => {
  io.on("connection", (socket) => {
    console.log("Socket connected:", socket.id);

    socket.on("authenticate", async ({ token }) => {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        online.set(decoded.id, socket.id);
        socket.userId = decoded.id;
        io.emit("onlineUsers", Array.from(online.keys()));
      } catch (err) { /* ignore */ }
    });

    socket.on("sendMessage", async ({ to, text, jobId }) => {
      if (!socket.userId) return;
      const msg = await Message.create({ from: socket.userId, to, job: jobId, text });
      const toSocket = online.get(to);
      if (toSocket) io.to(toSocket).emit("message", msg);
      socket.emit("message", msg);
    });

    socket.on("disconnect", () => {
      if (socket.userId) online.delete(socket.userId);
      io.emit("onlineUsers", Array.from(online.keys()));
    });
  });
};
