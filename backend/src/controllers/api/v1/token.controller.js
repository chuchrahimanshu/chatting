export const forgetPassword = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Token Module - Forget Password Controller",
      error: error,
    });
  }
};

export const twoFactorAuthentication = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Token Module - TFA Controller",
      error: error,
    });
  }
};

export const emailVerification = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: "Error - Token Module - Email Verification Controller",
      error: error,
    });
  }
};
