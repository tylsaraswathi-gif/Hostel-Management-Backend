import express from "express";

import {
  getStudents,
  getStudentById,
  addStudent,
  updateStudent,
  deleteStudent,
  loginStudent,
} from "../controllers/studentControllers.js";

const router = express.Router();

// Login Route
router.post("/login", loginStudent);

// Student CRUD Routes
router.get("/", getStudents);

router.get("/:id", getStudentById);

router.post("/", addStudent);

router.put("/:id", updateStudent);

router.delete("/:id", deleteStudent);

export default router;