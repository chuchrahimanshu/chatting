// Import Section
import express from "express";
import {
  changePassword,
  emailVerification,
  signIn,
  signOut,
  signUp,
  twoFactorAuthentication,
} from "../../../controllers/api/v1/auth.controller.js";

// Configuration Section
const router = express.Router();

// Un-Authenticated Routes Section
router.route("/sign-up").post(signUp);
router.route("/sign-in").post(signIn);
router.route("/change-password").post(changePassword);
router.route("/verify/tfa").post(twoFactorAuthentication);

// Authenticated Routes Section
router.route("/sign-out").get(signOut);
router.route("/verify/email").post(emailVerification);

// Export Section
export default router;
