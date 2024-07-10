// Import Section
import express from "express";
import {
  changePassword,
  emailVerification,
  signIn,
  signOut,
  signUp,
  createTFASession,
} from "../../../controllers/api/v1/auth.controller.js";

// Configuration Section
const router = express.Router();

// Un-Authenticated Routes Section
router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/change-password").post(changePassword);

// Authenticated Routes Section
router.route("/tfa/session/:userid").post(createTFASession);
router.route("/sign-out/:userid").get(signOut);
router.route("/verify/email/:userid").post(emailVerification);

// Export Section
export default router;
