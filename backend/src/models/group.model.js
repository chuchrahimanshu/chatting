// Import Section
import mongoose from "mongoose";

// Schema Section
const groupSchema = new mongoose.Schema(
  {
    groupName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Exporting and Creating Model Section
const Group = mongoose.model("Group", groupSchema);
export { Group };
