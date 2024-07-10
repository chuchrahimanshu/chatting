// Import Section
import express from "express";
import {
  changePassword,
  emailVerification,
  signIn,
  signOut,
  signUp,
  createTFASession,
  verifyForgetPasswordToken,
} from "../../../controllers/api/v1/auth.controller.js";

// Configuration Section
const router = express.Router();

// Un-Authenticated Routes Section
router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/verify/token/forget-password").post(verifyForgetPasswordToken);
router.route("/change-password").post(changePassword);

// Authenticated Routes Section
router.route("/tfa/session").post(createTFASession);
router.route("/sign-out").get(signOut);
router.route("/verify/email").post(emailVerification);

// Export Section
export default router;
