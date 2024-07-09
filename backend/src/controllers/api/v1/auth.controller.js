import { User } from "../../../models/user.model.js";

export const signUp = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (
      !firstName?.trim() ||
      !lastName?.trim() ||
      !email?.trim() ||
      !password?.trim()
    ) {
      return res.status(400).json({
        message: "Please provide all required details",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        message: "User already registered, Please Sign In",
      });
    }

    await User.create({
      firstName,
      lastName,
      email,
      password,
    });

    return res.status(201).json({
      message: "User created successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Sign Up Controller",
      error: error,
    });
  }
};

export const signIn = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Sign In Controller",
      error: error,
    });
  }
};

export const signOut = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Sign Out Controller",
      error: error,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Change Password Controller",
      error: error,
    });
  }
};

export const twoFactorAuthentication = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Verify TFA Controller",
      error: error,
    });
  }
};

export const emailVerification = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Email Verification Controller",
      error: error,
    });
  }
};
