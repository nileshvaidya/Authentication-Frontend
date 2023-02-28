import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { registerUser } from '../../../apiCalls/userAPI';
import { useNavigate } from 'react-router';
import Navbar from '../../../components/runback/navbar';
import { IRegisterType } from '../../../apiCalls/types';
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { registerFail, registerPending, registerSuccess } from './registerSlice';
import { useToast } from "../../../components/runback/Toast/useToast";
import { positionClasses } from "../../../components/runback/Toast/utils";
import { RequiredToastProps } from '../../../components/runback/Toast/type';

const inputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const selectClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const labelClasses =
  "block text-sm font-medium text-gray-900 dark:text-gray-300 mt-3 mb-2";

const buttonClasses =
  "my-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

const Register = () => {
  const [registering, setRegistering] = useState(false);
  const [error, setError] = useState('');
  const { register, handleSubmit } = useForm<IRegisterType>();
  const dispatch = useDispatch();
  const { add } = useToast();
  const history = useNavigate();
  const demo = () => {
    // history("/home");
  }

  const onSubmit: SubmitHandler<IRegisterType> = async (data) => {
    try {
    
      
      dispatch(registerPending)
      // data.user_type = "Customer";
      data.role = "CLIENT";
      console.log("Data...",data);
      
      // data.email
      const response: AxiosResponse = await registerUser(data) as AxiosResponse
      console.log(response );
      
        if (response.data.status === 200) {
          dispatch(registerSuccess)
          console.log(response);
          showToast(false, 'success', response.data.message, 3000, 'topCenter');
          // history("/login");
        }
      
      
      
      
    } catch (error) {
      //let errorMessage = "Failed to do something exceptional";
      if (error instanceof Error) {
        setError(error.message);
        dispatch(registerFail);
      }
    }
    setRegistering(false);
  }
  const showToast = (showIcon: RequiredToastProps["icon"], type: RequiredToastProps["type"], message: RequiredToastProps["message"], duration: RequiredToastProps["duration"], position: RequiredToastProps["position"]) => {
    add({
      icon: showIcon,
      type: type,
      message: (
        <div className="text-center">
                    <h5 className=" p-1 mb-2 text-red-900 dark:text-black/70">
                      `{message}`
          </h5>
          </div>
      ),
      duration: duration,
      position: position
      
    })
  }


  return (
    <>
    
    <div className='login-bg bg-no-repeat bg-cover grid grid-cols-1 sm:grid-cols-1 h-screen w-full'>

    <div className='flex items-center justify-center h-screen'>
         
          <form onSubmit={handleSubmit(onSubmit)} className=" bg-blue-gray-800 p-6 rounded-lg shadow-md">
          { error ? <h3 className="text-orange-800">{error}</h3> : null}
            <h2 className="text-3xl text-blue-50 text-center font-semibold mb-2">Register User</h2>
            <div className="mb-4">
              <label className="block text-xl text-white font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder='Name'
                className="border border-gray-900 p-2 w-full"
                {...register('name')}
              />
            </div>
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
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="password2"
                className="border border-gray-400 p-2 w-full"
                // {...register('password2')}
              />
            </div>
            <button disabled={registering} className="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600 w-96" >
              {registering ? 'Registering...' : 'Register'}
            </button>
          </form>
        </div>
        
      </div>
      </>
  )
}

export default Register
