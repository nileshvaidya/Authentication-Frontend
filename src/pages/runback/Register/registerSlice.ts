import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { WritableDraft } from "immer/dist/internal";
import { IUser } from "../../../apiCalls/types";

const rootUrl = "http://localhost:9000/api/v1/";
const registerUserURL = rootUrl + "user"
const loginUrl = rootUrl + "user/login";
const usersUrl = rootUrl + "admin/users";

export interface User{
  name: string;
  email: string;
  password: string;
  role: string;
}

interface UserState{
  users: User[];
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

const initialState: UserState = {
  users: [],
  isLoading: false,
  isAuth: false,
  error: '',
}

// const initialState = {
//   isLoading: false,
//   isAuth: false,
//   error: '',
// };
export const fetchUser = createAsyncThunk("user/fetch", async (thunkAPI) => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    if (!accessJWT) {
      return ({ status: 409, message: "Token not found!" });
    }
    const res = await axios.get(usersUrl, {
      headers: {
        Authorization: accessJWT,
      },
    });
    if (res.status === 200) {
      return (res.data.users)
      
    }
    
  } catch (error) {
    return (error);
  }
});

export const saveUser = createAsyncThunk("user/save", async (user : WritableDraft<User>,thunkAPI) => {
  try {
    const accessJWT = sessionStorage.getItem("accessJWT");
    if (!accessJWT) {
      return ({ status: 409, message: "Token not found!" });
    }
    const res = await axios.post(registerUserURL, user);
    
    if (res.data.status === 200) {
      
      
     return (res);
    }
    
  } catch (error) {
    console.log(error);
    return (error);
  }
});
export const registerSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push({
        name: action.payload.name,
        email: action.payload.email,
        password: action.payload.password,
        role: action.payload.role
      });
    },
    registerPending: (state) => {
      state.isLoading = true;
    },
    registerSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
      state.error = '';
    },
    registerFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.users = action.payload;
    });
      
    builder.addCase(saveUser.fulfilled, (state, action) => {
      if (typeof action.payload === 'object' && action.payload != null) {
        state.users.push(action.payload as WritableDraft<User>);
      }
    });
      }
});
const { reducer, actions } = registerSlice;

export const {addUser, registerPending, registerSuccess, registerFail } = registerSlice.actions;

export default registerSlice.reducer;