import axios from "axios";

const API_URL = process.env.EXPO_PUBLIC_API_URL;
const TOKEN_URL = API_URL + "tokens";

const generateForgetPasswordToken = async ({ bodyData }) => {
  const response = await axios.post(TOKEN_URL + `/forget-password`, bodyData);
  return response.data;
};

const tokenService = {
  generateForgetPasswordToken,
};

export default tokenService;
