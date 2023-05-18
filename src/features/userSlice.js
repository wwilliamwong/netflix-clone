import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchCount } from "./userAPI";

const initialState = {
  user: null,
};

export const incrementAsync = createAsyncThunk(
  "user/fetchCount",
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
