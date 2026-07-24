import express from "express";

import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentControllers.js";

import { auth } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

// ===============================
// Protected Routes (Logged-in Users)
// ===============================

// Get all students
router.get("/", auth, getStudents);

// Get student by ID
router.get("/:id", auth, getStudentById);

// ===============================
// Admin Only Routes
// ===============================

// Add new student
router.post("/", auth, adminOnly, addStudent);

// Update student
router.put("/:id", auth, adminOnly, updateStudent);

// Delete student
router.delete("/:id", auth, adminOnly, deleteStudent);

export default router;