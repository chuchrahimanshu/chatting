import { Token } from "../../../models/token.model.js";
import { User } from "../../../models/user.model.js";
import { sendMail } from "../../../utils/email.util.js";
import { generateSixDigitOTPToken } from "../../../utils/helper.util.js";

export const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email?.trim()) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const randomOTP = await generateSixDigitOTPToken();

    const existingToken = await Token.findOne({ user: user._id });
    if (!existingToken) {
      const token = await Token.create({
        user: user._id,
      });

      token.forgetPassword.token = randomOTP;
      token.forgetPassword.createdAt = new Date(Date.now());
      token.forgetPassword.status = false;
      await token.save();
    } else if (!existingToken.forgetPassword.createdAt) {
      existingToken.forgetPassword.token = randomOTP;
      existingToken.forgetPassword.createdAt = new Date(Date.now());
      existingToken.forgetPassword.status = false;
    } else {
      const tokenCreatedAt = existingToken.forgetPassword.createdAt;
      const validDate = new Date(tokenCreatedAt.getTime() + 2 * 60 * 1000);
      const currentTime = Date.now();

      if (currentTime < validDate) {
        return res.status(400).json({
          message: "Wait for two minutes to regenerate OTP",
        });
      }

      existingToken.forgetPassword.token = randomOTP;
      existingToken.forgetPassword.createdAt = new Date(Date.now());
      existingToken.forgetPassword.status = false;
      await existingToken.save();
    }
    const emailResponse = await sendMail(
      user.email,
      process.env.DEFAULT_EMAIL,
      "Forget Password OTP",
      randomOTP
    );

    if (emailResponse.accepted.length === 0) {
      return res.status(500).json({
        message:
          "Something went wrong, OTP not generated. Please try again later",
      });
    }

    return res.status(200).json({
      message: "OTP sent on registered email address",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const twoFactorAuthentication = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email?.trim()) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const randomOTP = await generateSixDigitOTPToken();

    const existingToken = await Token.findOne({ user: user._id });
    if (!existingToken) {
      const token = await Token.create({
        user: user._id,
      });

      token.tfa.token = randomOTP;
      token.tfa.createdAt = new Date(Date.now());
      await token.save();
    } else if (!existingToken.tfa.createdAt) {
      existingToken.tfa.token = randomOTP;
      existingToken.tfa.createdAt = new Date(Date.now());
    } else {
      const tokenCreatedAt = existingToken.tfa.createdAt;
      const validDate = new Date(tokenCreatedAt.getTime() + 2 * 60 * 1000);
      const currentTime = Date.now();

      if (currentTime < validDate) {
        return res.status(400).json({
          message: "Wait for two minutes to regenerate OTP",
        });
      }

      existingToken.tfa.token = randomOTP;
      existingToken.tfa.createdAt = new Date(Date.now());
      await existingToken.save();
    }

    const emailResponse = await sendMail(
      user.email,
      process.env.DEFAULT_EMAIL,
      "Two Factor Authentication OTP",
      randomOTP
    );

    if (emailResponse.accepted.length === 0) {
      return res.status(500).json({
        message:
          "Something went wrong, OTP not generated. Please try again later",
      });
    }

    return res.status(200).json({
      message: "OTP sent on registered email address",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error - Token Module - TFA Controller",
      error: error,
    });
  }
};

export const emailVerification = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email?.trim()) {
      return res.status(400).json({
        message: "Please provide a valid email address",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const randomOTP = await generateSixDigitOTPToken();

    const existingToken = await Token.findOne({ user: user._id });
    if (!existingToken) {
      const token = await Token.create({
        user: user._id,
      });

      token.emailVerification.token = randomOTP;
      token.emailVerification.createdAt = new Date(Date.now());
      await token.save();
    } else if (!existingToken.emailVerification.createdAt) {
      existingToken.emailVerification.token = randomOTP;
      existingToken.emailVerification.createdAt = new Date(Date.now());
    } else {
      const tokenCreatedAt = existingToken.emailVerification.createdAt;
      const validDate = new Date(tokenCreatedAt.getTime() + 2 * 60 * 1000);
      const currentTime = Date.now();

      if (currentTime < validDate) {
        return res.status(400).json({
          message: "Wait for two minutes to regenerate OTP",
        });
      }

      existingToken.emailVerification.token = randomOTP;
      existingToken.emailVerification.createdAt = new Date(Date.now());
      await existingToken.save();
    }

    const emailResponse = await sendMail(
      user.email,
      process.env.DEFAULT_EMAIL,
      "Two Factor Authentication OTP",
      randomOTP
    );

    if (emailResponse.accepted.length === 0) {
      return res.status(500).json({
        message:
          "Something went wrong, OTP not generated. Please try again later",
      });
    }

    return res.status(200).json({
      message: "OTP sent on registered email address",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error - Token Module - Email Verification Controller",
      error: error,
    });
  }
};
