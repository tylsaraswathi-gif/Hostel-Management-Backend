import express from "express";

import {
  getComplaints,
  getComplaintById,
  addComplaint,
  updateComplaint,
  deleteComplaint,
} from "../controllers/complaintControllers.js";

const router = express.Router();

// Get all complaints
router.get("/", getComplaints);

// Get complaint by ID
router.get("/:id", getComplaintById);

// Add a new complaint
router.post("/", addComplaint);

// Update complaint
router.put("/:id", updateComplaint);

// Delete complaint
router.delete("/:id", deleteComplaint);

export default router;