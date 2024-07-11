// Import Section
import express from "express";
import authRouter from "./auth.routes.js";
import tokenRouter from "./token.routes.js";

// Configuration Section
const router = express.Router();

// Middleware Section
router.use("/auth", authRouter);
router.use("/tokens", tokenRouter);

// Export Section
export default router;
