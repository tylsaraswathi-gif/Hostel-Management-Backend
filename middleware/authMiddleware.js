import jwt from "jsonwebtoken";

// Authentication Middleware
export const auth = (req, res, next) => {
  try {
    // Read Authorization Header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No token provided.",
      });
    }

    // Extract Token
    // Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Token not found.",
      });
    }

    // Verify JWT Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store user information in request
    req.user = decoded;

    // Pass control to the next middleware/controller
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or Expired Token",
    });
  }
};