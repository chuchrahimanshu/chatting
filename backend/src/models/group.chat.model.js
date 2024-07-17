// Import Section
import mongoose from "mongoose";

// Schema Section
const groupChatSchema = new mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting and Creating Model Section
const GroupChat = mongoose.model("GroupChat", groupChatSchema);
export { GroupChat };
