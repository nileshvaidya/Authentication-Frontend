import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User{
  isLoggedIn: boolean;
  role: string;
}

interface UserState{
  userState:User
}

const initialState = {
  
    isLoggedIn: false,
    role: "CLIENT"
  
};

export const UserStateSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    updateIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    updateUserRole: (state, action: PayloadAction<string>) => {
        state.role = action.payload;
    }
      
    },
  });

export default UserStateSlice.reducer;
export const { updateIsLoggedIn, updateUserRole } = UserStateSlice.actions;