// Import Section
import mongoose from "mongoose";

// Schema Section
const groupUserSchema = new mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Group",
      required: true,
    },
    user: {
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
const GroupUser = mongoose.model("GroupUser", groupUserSchema);
export { GroupUser };
