export const generateSixDigitOTPToken = async () => {
  let OTP = "";
  for (let index = 0; index < 6; index++) {
    const randomDigit = Math.floor(Math.random() * 10);
    OTP += randomDigit;
  }
  return OTP;
};
