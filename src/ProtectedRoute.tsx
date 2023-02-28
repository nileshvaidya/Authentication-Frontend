import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import Login from "./pages/Login1";
import { useStateValue } from "./store/StateProvider";


import Index from "./pages/runback/index/Index";

import { useAppSelector } from "./store/store";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { DefaultLayout } from "./layout/DefaultLayout";

export const ProtectedRoute = ({ children,...rest }) => {
  // const userState = useAppSelector(state=>state.userState.userState.isLoggedIn)
  // const { isLoggedIn, updateIsLoggedIn, role, updateUserRole } = useContext(AuthContext) as AuthContextData;
  const userState = useSelector((state:RootState) => state.userState.isLoggedIn)
  console.log("User status : ", userState);
  // console.log("User role : ", role);
  
  if (!userState) {
    // user is not authenticated
    return <Index />;
  }
  console.log(("Going to Demo"));
  
  return <DefaultLayout>{children} </DefaultLayout>;
};