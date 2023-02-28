import React, { useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { loginUser } from '../../../apiCalls';
import {  ILoginType } from '../../../apiCalls/types';
import { useDispatch, useSelector } from "react-redux";

// import { useAppDispatch } from 'react-redux';
import { updateIsLoggedIn, updateUserRole } from '../../../store/features/authSlice';
import { RootState } from '../../../store/store';

import { loginPending,loginSuccess, loginFail } from './loginSlice';
import { userLogin } from '../../../apiCalls/userAPI';
import { AxiosResponse } from 'axios';
import { Http2ServerResponse } from 'http2';

interface loginResponse {
  status: string;
  message: string;
  error?: Error;
  
}

interface CustomAxiosResponse<T> extends AxiosResponse {
  data: T;
} ;

const Login = () => {
  // const dispatch = useAppDispatch();
  const [logging, setLogging] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<ILoginType>();
  // const { isLoggedIn, updateIsLoggedIn, role, updateUserRole } = useContext(AuthContext) as AuthContextData;
  const role = useSelector((state: RootState) => state.userState.role);
  console.log(" value of status : ", role);
  const [isLoggedInStatus, setIsLoggedInStatus] = useState(false);
  const [userRole, setUserRole] = useState("");
  let val: object;
  const history = useNavigate();
  const dispatch = useDispatch();
  const demo = () => {
    // history("/home");
  }

  const OnSubmit: SubmitHandler<ILoginType> = async (data) => {
    if (!data.email || !data.password) {
      return alert("Fill up all the form");
    }
    let email = data.email;
    let password = data.password;
    let root_name = "Customer"
    console.log(email);
    
    dispatch(loginPending());
    try {
      
      const isAuth: CustomAxiosResponse<loginResponse> = await userLogin( {email, password} ) as CustomAxiosResponse<loginResponse> ;

      if (isAuth.data.status === 'error') {
        return dispatch(loginFail(isAuth.data.message));
      }
      dispatch(loginSuccess());

      
      // data.user_type = "Customer";
      // // data.email
      // const res = await loginUser(data)
      // console.log(" value of res : ", res);
      // console.log(" value of role in res : ", res.user.role);
      // await setIsLoggedInStatus(true);
      // await setUserRole(res.user.role);
      // console.log(" value of userRole : ", userRole);
      // await dispatch(updateIsLoggedIn(true));
      // await dispatch(updateUserRole(res.user.role))
     
      history("/home");
      
      // updateIsLoggedIn(true);
      //  updateUserRole(res.user.role);
      
      
    } catch (error) {
      //let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        dispatch(loginFail(error.message));
      }
    }
    // console.log("Logged In login : ", isLoggedInStatus);
    // console.log("Role In login : ", userRole);
    // console.log("val : ", val);
      // console.log("Logged status : ", userState);
      
      
    // setLogging(false);
  }

  return (
    <>
      
    <div className='login-bg bg-no-repeat bg-cover grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>

    <div className='flex items-center justify-center h-screen'>
         
          <form onSubmit={handleSubmit(OnSubmit)} className=" bg-blue-gray-800 p-6 rounded-lg shadow-md">
          { error ? <h3 className="text-orange-800">{error}</h3> : null}
            <h2 className="text-3xl text-blue-50 text-center font-semibold mb-2">Login</h2>
           
            <div className="mb-4">
              <label className="block text-xl text-white font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder='Email'

                className="border border-gray-900 p-2 w-full"
                {...register('email')}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-400 p-2 w-full"
                {...register('password')}
              />
            </div>
           
            <button disabled={logging} className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 w-96" >
              {logging ? 'Logging...' : 'Login'}
            </button>
          </form>
        </div>
        
      </div>
      </>
  )
};



export default Login;