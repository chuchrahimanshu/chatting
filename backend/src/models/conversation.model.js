// Import Section
import mongoose from "mongoose";

// Schema Section
const conversationSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    friend: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting and Creating Model Section
const Conversation = mongoose.model("Conversation", conversationSchema);
export { Conversation };
