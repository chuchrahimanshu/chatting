import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./auth.service";

const initialState = {
  user: {},
};

export const signUp = createAsyncThunk(
  "auth/signUp",
  async (apiData, thunkAPI) => {
    try {
      return await authService.signUp(apiData);
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

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;
