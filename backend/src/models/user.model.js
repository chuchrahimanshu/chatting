// Import Section
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import JWT from "jsonwebtoken";

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
    refreshToken: {
      token: {
        type: String,
      },
      createdAt: {
        type: Date,
      },
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

// Schema Methods Section
userSchema.methods.validatePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.methods.generateAccessToken = async function () {
  return await JWT.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.JWT_ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return await JWT.sign(
    {
      _id: this._id,
    },
    process.env.JWT_REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_TOKEN_EXPIRY,
    }
  );
};

// Exporting Modal
const User = mongoose.model("User", userSchema);
export { User };
