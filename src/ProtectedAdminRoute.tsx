
import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";


import Index from "./pages/runback/index/Index";
import { RootState } from "./store/store";
export const ProtectedAdminRoute = ({ children }) => {
  
  const isLoggedIn = useSelector((state:RootState) => state.userState.isLoggedIn)
  const role = useSelector((state:RootState) => state.userState.role)
 
  console.log("Logged In state : ", isLoggedIn);
  console.log("Role In state : ", role);
  
  if (!isLoggedIn) {
    // user is not authenticated
    return <Index />;
  }
  if (role !== 'ADMIN') {
    return <Index />;
  }
  
  return <DefaultLayout>{children} </DefaultLayout>;
};



export default ProtectedAdminRoute