import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isAuth: false,
  error: '',
};

const profileSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    profilePending: (state) => {
      state.isLoading = true;
    },
    profileSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    profileFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
const { reducer, actions } = profileSlice;

export const { profilePending, profileSuccess, profileFail } = actions;

export default reducer;