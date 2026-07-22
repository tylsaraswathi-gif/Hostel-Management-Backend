import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    studentName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
    },

    branch: {
      type: String,
      required: true,
      enum: ["CSE", "CSM", "AI", "CIVIL", "DS", "AIML"],
    },

    roomNo: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

export default Student;