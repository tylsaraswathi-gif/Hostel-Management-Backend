import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";
import studentRoutes from "./routes/studentRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

connectDB();

const app = express();
//deployement configuration
app.use(
  cors({
    origin:process.env.CLIENT_URL,
    credentials:true
  })
)

app.use(cors());
app.use(express.json());

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Home Route
app.get("/", (req, res) => {
  res.send("Hostel Management Backend Running");
});

// Routes
app.use("/students", studentRoutes);
app.use("/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Started Successfully`);
  console.log(`http://localhost:${PORT}`);
});