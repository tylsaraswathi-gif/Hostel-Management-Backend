import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
    student: String,
    issue: String,
    status: String
});

export default mongoose.model("Complaint", complaintSchema);