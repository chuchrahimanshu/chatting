export const signUp = async (req, res) => {
  try {
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
