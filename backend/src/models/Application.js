import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  applicant: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  job: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
  coverLetter: String,
  resumeUrl: String,
  status: { type: String, enum: ["applied","reviewing","interview","rejected","hired"], default: "applied" }
}, { timestamps: true });

export default mongoose.model("Application", applicationSchema);
