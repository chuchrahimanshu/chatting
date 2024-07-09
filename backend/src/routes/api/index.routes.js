// Import Section
import express from "express";
import v1Router from "./v1/index.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/api", v1Router);

// Export Section
export default router;
