import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    id: Number,
    studentName: String,
    branch: String,
    cgpa: Number,
    roomNo: Number,
    hostel: String
});

export default mongoose.model("Student", studentSchema);