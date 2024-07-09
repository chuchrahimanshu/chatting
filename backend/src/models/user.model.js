// Import Section
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// Schema Section
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Pre - Save Events Section
userSchema.pre("save", async function (next) {
  if (this.isModified("firstName")) {
    this.firstName =
      this.firstName.slice(0, 1).toUpperCase() +
      this.firstName.slice(1, this.firstName.length).toLowerCase();
  }

  if (this.isModified("lastName")) {
    this.lastName =
      this.lastName.slice(0, 1).toUpperCase() +
      this.lastName.slice(1, this.lastName.length).toLowerCase();
  }

  if (this.isModified("email")) {
    this.email = this.email.toLowerCase();
  }

  if (this.isModified("password")) {
    const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS?.toString();
    const salt = await bcrypt.genSalt(SALT_ROUNDS);
    this.password = await bcrypt.hash(this.password, salt);
  }

  next();
});

// Exporting Modal
const User = mongoose.model("User", userSchema);
export { User };
