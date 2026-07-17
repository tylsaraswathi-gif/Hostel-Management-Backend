import express from "express";
import connectDB from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import complaintRoutes from "./routes/complaintRoutes.js";

const app = express();
const PORT = 8000;

// Connect MongoDB
connectDB();

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Hostel Management Backend");
});

// Routes
app.use("/students", studentRoutes);
app.use("/rooms", roomRoutes);
app.use("/complaints", complaintRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server Started Successfully`);
    console.log(`http://localhost:${PORT}`);
});