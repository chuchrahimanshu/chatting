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
    const { email, password } = req.body;
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({
        message: "Please provide all required details",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "Invalid Email / Password",
      });
    }

    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(404).json({
        message: "Invalid Email / Password",
      });
    }

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken.token = refreshToken;
    user.refreshToken.createdAt = new Date(Date.now());
    await user.save();

    return res.status(200).json({
      message: "Session created successfully",
      accessToken,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error - Auth Module - Sign In Controller",
      error: error,
    });
  }
};

export const signOut = async (req, res) => {
  try {
    const { userid } = req.params;
    if (!userid?.trim()) {
      return res.status(500).json({
        message: "Internal server error, No userid found",
      });
    }

    const user = await User.findById(userid);
    if (!user) {
      return res.status(409).json({
        message: "Un-Authorized Access Found!",
      });
    }

    user.refreshToken.token = "";
    await user.save();

    return res.status(200).json({
      message: "User signout successfully",
    });
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
