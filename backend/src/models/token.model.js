// Import Section
import mongoose from "mongoose";
import bcrypt from "bcryptjs";

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
    status: {
      type: Boolean,
      default: false,
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

// Pre Save Section
tokenSchema.pre("save", async function (next) {
  if (this.isModified("forgetPassword")) {
    const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS?.toString();
    const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS));
    this.forgetPassword = await bcrypt.hash(this.forgetPassword, salt);
  }

  if (this.isModified("tfa")) {
    const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS?.toString();
    const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS));
    this.tfa = await bcrypt.hash(this.tfa, salt);
  }

  if (this.isModified("emailVerification")) {
    const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS?.toString();
    const salt = await bcrypt.genSalt(parseInt(SALT_ROUNDS));
    this.emailVerification = await bcrypt.hash(this.emailVerification, salt);
  }

  next();
});

// Schema Methods Section
tokenSchema.methods.validateForgetPasswordToken = async function (token) {
  return await bcrypt.compare(token, this.forgetPassword);
};
tokenSchema.methods.validateTFAToken = async function (token) {
  return await bcrypt.compare(token, this.tfa);
};
tokenSchema.methods.validateEmailVerificationToken = async function (token) {
  return await bcrypt.compare(token, this.emailVerification);
};

// Exporting and Creating Model Section
const Token = mongoose.model("Token", tokenSchema);
export { Token };
