import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const AUTH_URL = API_URL + "auth";

const signUp = async ({ bodyData }) => {
  const response = await axios.post(AUTH_URL + `/sign-up`, bodyData);
  return response.data;
};

const authService = {
  signUp,
};

export default authService;
