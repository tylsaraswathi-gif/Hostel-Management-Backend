import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hostel_management");
        console.log("MongoDB Connected Successfully");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

export default connectDB;