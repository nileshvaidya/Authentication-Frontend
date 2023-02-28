import { ReactNode } from "react";
import roles from "../utils/constants";
export interface ILoginType {
  [x: string]: ReactNode;
  
  user_type: string;
  email: string;
  password: string;
  role: string;// [roles.admin, roles.client, roles.moderator];
}

export interface IRegisterType{
  name: string;
  user_type: string;
  email: string;
  password: string;
  role: string;
}

export interface Error{
  status?: number;
  code?: number;
  response?: object;
  
}
export interface IUser {
  _id?: string;
  name: string;
  email: string;
  role: roles;
}
