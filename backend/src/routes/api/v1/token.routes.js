// Import Section
import express from "express";
import {
  emailVerification,
  forgetPassword,
  twoFactorAuthentication,
} from "../../../controllers/api/v1/token.controller.js";

// Configuration Section
const router = express.Router();

// Un-Authenticated Routes
router.route("/forget-password").post(forgetPassword);
router.route("/tfa").post(twoFactorAuthentication);

// Authenticated Routes Section
router.route("/email-verification").get(emailVerification);

// Export Section
export default router;
