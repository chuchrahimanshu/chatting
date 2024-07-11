import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import tokenService from "./token.service";

const initialState = {};

export const generateForgetPasswordToken = createAsyncThunk(
  "token/generateForgetPasswordToken",
  async (apiData, thunkAPI) => {
    try {
      return await tokenService.generateForgetPasswordToken(apiData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {},
});

export default tokenSlice.reducer;
