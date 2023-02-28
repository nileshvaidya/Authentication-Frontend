import axios, { AxiosResponse } from "axios";
import { AxiosError } from 'axios';
import { useContext } from "react";

import { ILoginType, IRegisterType, IUser } from "./types";

const API_URL = "http://localhost:9000/api/v1"; 

const api = axios.create({
  baseURL: "http://localhost:9000/api/v1",
});
api.defaults.withCredentials = true
export const loginUser = async({user_type,email,password}:ILoginType) => {


    user_type = "Customer";
    const res = await api
      .post("/auth/login", {
        user_type,
        email,
        password
      })
      .catch((err) => console.log(err)); 
  const result:ILoginType = await (res as AxiosResponse<ILoginType>).data;
        console.log("result in api : ", result );
        // console.log("role in api : ", result.user.role );
        
        return result;
}
export const getUser = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      const res = await api
        .get<IUser>("/auth/user", {
          headers: {
            Authorization: accessJWT,
          },
        })
        .catch((err) => console.log(err));
      const data = await (res as AxiosResponse<any, any>).data;
      return data;
    }
    catch (error) {
      
    }
  });
}

// export const getUserProfile = async(id:string) => {
//     const res = await api
//       .get<IUser>(`/admin/user/${id}`, {
//         withCredentials: true
//       })
//       .catch((err) => console.log(err)); 
//   const data = await (res as AxiosResponse<any, any>).data;
//   console.log("data in api : ", data);
  
//       return data;
// }
// export const getUsers = async() => {
//     const res = await api
//       .get("/admin/users", {
//         withCredentials: true
//       })
//       .catch((err) => console.log(err)); 
//   const data = await (res as AxiosResponse<any, any>).data;
//   console.log("USers in api : ", data);
  
//       return data;
// }
export const getRefreshedToken = async() => {
    const res = await api
      .get("/auth/refresh", {
        withCredentials: true
      })
      .catch((err) => console.log(err)); 
  const data = await (res as AxiosResponse<any, any>).data;

        return data;
}
  

export const registerUser = async({name,user_type,email,password,role}:IRegisterType) => {

  
  user_type = "Customer";
  role = "CLIENT";
  console.log("name : " , name);
  
  const res = await api
    .post("/auth/register", {
      name,
      user_type,
      email,
      password,
      role
    })
    .catch((err) => console.log(err));
  const data = await (res as AxiosResponse<any, any>).data;
  return data;
}

export const sendLogoutRequest = async() => {

  
   
  const res = await api
    .post("/auth/logout",null, {
     withCredentials:true
    })
    .catch((err) => console.log(err));
    const data = await (res as AxiosResponse<any, any>).data;
  if (data.status == 200) {
    return data;
  }
}
  


// export const registerUser = async (user: IRegisterType) => {
//   try {
//     user.user_type = "Customer";
//     const response = await fetch(`${API_URL}/auth/register`, {
//       method: 'POST',
//       headers: {
//         'content-type': 'application/json'
//       },
//       body: JSON.stringify(user),
//     });
//     let json;
//     if (response.status === 409) {
//       console.log(response);
      
//       // const error = new Error(response.message);
//       // error.response = json;
//       // throw error;
//     }
//     if (response.headers.get('content-type')?.includes('text/html')) {
//       const message = await response.text;
//       json = {
//         message,
//       };

//     } else {
//       json = await response.json();
//     }
//     if (response.ok) {
//       console.log(response)
//       return json;
//     }
//   } catch (error) {
//     return ((error as Error).message);
//   }
//   };