// backend/index.js
import express from "express";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" })); // Vite default port

// Your routes
app.get("/api/jobs", (req, res) => {
  res.json([{ id: 1, title: "Frontend Dev", company: "Softlink" }]);
});

app.listen(5000, () => console.log("Server running on port 5000"));
