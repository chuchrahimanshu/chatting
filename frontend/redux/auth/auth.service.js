import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AUTH_URL = API_URL + "auth";

const signUp = async ({ bodyData }) => {
  const response = await axios.post(AUTH_URL + `/sign-up`, bodyData);
  return response.data;
};

const signIn = async ({ bodyData }) => {
  const response = await axios.post(AUTH_URL + `/sign-in`, bodyData);
  return response.data;
};

// TODO: Create Home Page and add Sign Out Button
// const signOut = async () => {
//   const response = await axios.get(AUTH_URL + `/sign-out`);
//   return response.data;
// };

const verifyForgetPasswordOTP = async ({ bodyData }) => {
  const response = await axios.post(
    AUTH_URL + `/verify/token/forget-password`,
    bodyData
  );
  return response.data;
};

const changePassword = async ({ bodyData }) => {
  const response = await axios.post(
    AUTH_URL + `/change-password`,
    bodyData
  );
  return response.data;
};

const authService = {
  signUp,
  signIn,
  verifyForgetPasswordOTP,
  changePassword
};

export default authService;
