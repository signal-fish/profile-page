import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  userInfo: {
    name: "Fish",
    email: "fish@email.com",
  },
  pending: null,
  error: null,
};

export const updateUser = createAsyncThunk("users/update", async (user) => {
  const response = await axios.post(
    "http://localhost:5000/api/users/1/update",
    user
  );
  return response.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [updateUser.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      state.pending = false;
    },
    [updateUser.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { updateStart, updateSuccess, updateFailure } = userSlice.actions;

export default userSlice.reducer;
