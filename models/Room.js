import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNo: Number,
    floor: Number,
    capacity: Number,
    occupied: Number
});

export default mongoose.model("Room", roomSchema);