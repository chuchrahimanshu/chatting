// Import Section
import mongoose from "mongoose";

// Schema Section
const tokenSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  forgetPassword: {
    token: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
  },
  tfa: {
    token: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
  },
  emailVerification: {
    token: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
  },
});

// Exporting and Creating Model Section
const Token = mongoose.model("Token", tokenSchema);
export { Token };
