// Import Section
import express from "express";
import authRouter from "./auth.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/api", authRouter);

// Export Section
export default router;
