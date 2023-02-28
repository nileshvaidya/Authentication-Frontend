import axios, { AxiosResponse } from "axios";
import { IUser } from "./types";

const rootUrl = "http://localhost:9000/api/v1/";
const registerUserURL = rootUrl + "user"
const loginUrl = rootUrl + "user/login";
const usersUrl = rootUrl + "admin/users";
const userProfileUrl = rootUrl + "admin/user";
const updateUserRoleUrl = rootUrl + "admin/update-role";
const updateUserPasswordUrl = rootUrl + "admin/update-password";
const deleteUserUrl = rootUrl + "admin/user";
interface loginResponse {
  status: string;
  message: string;
  error?: Error;
  
}

export const registerUser = (frmData: any) => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(registerUserURL, frmData);
      
      if (res.data.status === 200) {
        
        
       return resolve(res);
      }
      
    } catch (error) {
      reject(error);
      console.log(error);
      
    }
  });
};

export const userLogin = (frmData: any) => {
  console.log(frmData);
  
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.post(loginUrl, frmData);

      if (res.data.status === "success") {
        sessionStorage.setItem("accessJWT", res.data.accessJWT);
        localStorage.setItem(
          "runback",
          JSON.stringify({ refreshJWT: res.data.refreshJWT })
          
        );
        resolve(res);
      }
    } catch (error) {
      reject(error);
    }
  });

};

export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      const res = await axios.get(usersUrl, {
        headers: {
          Authorization: accessJWT,
        },
      });
      if (res.status === 200) {
        return resolve(res.data.users)
        
      }
      
    } catch (error) {
      reject(error);
    }

  });
};
export const getUserProfile = (id: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      const res = await axios.get(`${userProfileUrl}/${id}`, {
        headers: {
          Authorization: accessJWT,
        },
      });
      if (res.status === 200) {
        console.log(res);
        
        return resolve(res.data.user)
        
      }
      
    } catch (error) {
      reject(error);
    }

  })
}
export const updateUserRole = (id:string, role:string, user:IUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      console.log(`${updateUserRoleUrl}/${id}/${role}`);
      const data = {
        id: id,
        role: role
       
      }
      const headers = {
        
          Authorization:accessJWT
        
      }
      const res:AxiosResponse = await axios.post(`${updateUserRoleUrl}/${id}/${role}`, data, { headers });
      if (res.status === 200) {
        console.log(res);
        
        return resolve(res)
        
      }
      
    } catch (error) {
      reject(error);
    }

  })
} 
export const updateUserPassword = (id:string, password:string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      console.log(`${updateUserPasswordUrl}`);
      const data = {
        id: id,
        password: password
       
      }
      const headers = {
        
          Authorization:accessJWT
        
      }
      const res:AxiosResponse = await axios.post(`${updateUserPasswordUrl}`, data, { headers });
      if (res.status === 200) {
        console.log(res);
        
        return resolve(res)
        
      }
      
    } catch (error) {
      reject(error);
    }

  })
} 
export const deleteUser = (id:string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const accessJWT = sessionStorage.getItem("accessJWT");
      if (!accessJWT) {
        reject("Token not found!");
      }
      console.log(`${deleteUserUrl}/${id}`);
      const data = {
        id: id,
      }
      const headers = {
        
          Authorization:accessJWT
        
      }
      const res:AxiosResponse = await axios.delete(`${deleteUserUrl}/${id}`, { headers });
      if (res.status === 200) {
        console.log(res);
        
        return resolve(res)
        
      }
      
    } catch (error) {
      reject(error);
    }

  })
} 