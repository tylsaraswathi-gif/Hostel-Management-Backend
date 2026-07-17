import express from "express";

import {
  getRooms,
  getRoomById,
  addRoom,
  updateRoom,
  deleteRoom
} from "../controllers/roomControllers.js";

const router = express.Router();

router.get("/", getRooms);

router.get("/:roomNo", getRoomById);

router.post("/", addRoom);

router.put("/:roomNo", updateRoom);

router.delete("/:roomNo", deleteRoom);

export default router;