import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  employer: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  location: String,
  type: { type: String, enum: ["full-time", "part-time", "contract", "gig"], default: "full-time" },
  salaryRange: { min: Number, max: Number },
  skills: [String],
  status: { type: String, enum: ["open", "closed", "paused"], default: "open" }
}, { timestamps: true });

export default mongoose.model("Job", jobSchema);
