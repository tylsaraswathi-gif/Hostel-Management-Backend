import express from "express";
import upload from "../middleware/uploads.js";

import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  loginStudent,
} from "../controllers/studentControllers.js";

const router = express.Router();

// =======================
// Login
// =======================
router.post("/login", loginStudent);

// =======================
// Get All Students
// Supports:
// page
// limit
// search
// sortBy
// order
// Example:
// /api/students?page=1&limit=5
// /api/students?page=2&limit=5&search=John
// /api/students?page=1&limit=5&sortBy=studentName&order=asc
// =======================
router.get("/", getStudents);

// =======================
// Get Student By ID
// =======================
router.get("/:id", getStudentById);

// =======================
// Add Student
// ======================= 
  router.post("/",
  //receive one file as image 
  upload.single("image"),
  addStudent);

// =======================
// Update Student
// =======================
router.put("/:id", updateStudent);

// =======================
// Delete Student
// =======================
router.delete("/:id", deleteStudent);

export default router;