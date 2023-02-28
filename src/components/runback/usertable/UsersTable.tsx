import React, { ChangeEvent, FormEvent, memo, useEffect, useState } from 'react';
import { useToast } from "../Toast/useToast";
import { positionClasses } from "../Toast/utils";
import { RequiredToastProps } from '../Toast/type';

// import { getUser } from '../../../apiCalls';
import { IUser } from '../../../apiCalls/types';
import { deleteUser, getUsers, updateUserPassword, updateUserRole } from '../../../apiCalls/userAPI';
import roles from '../../../utils/constants'
import { AxiosResponse } from 'axios';
import { useDispatch } from 'react-redux';
import { usersFail, usersPending, usersSuccess } from './userSlice';
let response: IUser[];
interface Props {
  users: IUser[];
}

interface PassFormData {
  newPass: string;
  confPass: string;
}

const inputClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const selectClasses =
  "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-black/30 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500";

const labelClasses =
  "block text-sm font-medium text-gray-900 dark:text-gray-300 mt-3 mb-2";

const buttonClasses =
  "my-1 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

const UsersTable:React.FC<Props> = ({users}) => {

  const [allUsers, setAllUsers] = useState<IUser[]>([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [user, setUser] = useState<IUser>({ role: roles.client, name: "", email: "", _id: "" });
  const [selectedRole, setSelectedRole] = useState(user.role);
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(undefined);
  const [activeRow, setActiveRow] = useState<string>('');
  const [newPassword, setNewPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  console.log("USers in User Table : ", users);
  const dispatch = useDispatch();
  const { add } = useToast();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<PassFormData>({
    newPass: "",
    confPass: "",
  });
  
  // }

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

  useEffect(() => {

    
    console.log("Re-rendered");
    
  }, [allUsers]);

  const handleUpdateRole = async (event:  React.ChangeEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const newRole = event.target.value as roles;
      const id = event.target.getAttribute("data-user-id");
    setSelectedRole(event.target.value as roles);
    setSelectedUserId( event.target.getAttribute("data-user-id")!);
   
  
    try {
      const val: roles = stringToRole(newRole);
      const objIndex = allUsers.findIndex((user => user._id == id));
      const myArray = allUsers;
      // console.log(allUsers);
      
      myArray[objIndex].role = newRole;
      // console.log("Selected Role : ", newRole);
      setAllUsers(myArray);
      // console.log(allUsers);
    } catch (error) {
      console.error(error);
    }
  };
  //create your forceUpdate hook
  const [count, updateCount] = React.useState(0);
  
 
  function stringToRole(value: string): roles {
    switch (value) {
      case 'ADMIN':
        return roles.admin;
      case 'MODERATOR':
        return roles.moderator;
      case 'CLIENT':
        return roles.client;
      default:
        throw new Error(`Invalid role: ${value}`);
    }
  }

  const fetchData = async () => {

    dispatch(usersPending);
    try {
      const usersVal = await getUsers() as IUser[];
      console.log("users....", usersVal);
      if (!usersVal) {
        return dispatch(usersFail)
      }
      setAllUsers(usersVal);
      dispatch(usersSuccess);
       
    } catch (error) {
    
    }
  }

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const id = selectedUserId;// formData.get('id') as string;
    const role = selectedRole; // formData.get('role') as roles;

    if (id && role) {
        
        
      const response:AxiosResponse = await updateUserRole(id, role, user) as AxiosResponse;
      
      // console.log(response.data.message);
      showToast(false, 'success', response.data.message, 3000, 'topCenter');
      }
  };
 
  const handleDeleteUser = async (event: React.MouseEvent<HTMLButtonElement>) => {
    const id = event.currentTarget.value;
    console.log(id);
    const response: AxiosResponse = await deleteUser(id) as AxiosResponse;
    setAllUsers(allUsers.filter(item => item._id !== id));
    fetchData();
    const v = window.location.href;
    console.log(v);
    showToast(false, 'success', response.data.message, 3000, 'topCenter');
    window.location.href = v;
    
  }
  
  const handleOnCancelClick = () => {
    setActiveRow('');
    setNewPassword('');
    setConfPassword('');
  }
  
  const handlePassFormSubmit = async(event: React.FormEvent<HTMLFormElement>, userId: string) => {
    event.preventDefault();
    // Check if New Pass & Conf Password match
    if (newPassword === confPassword) {
      // Do something with the new password value
      console.log(`New password for user ${userId}: ${newPassword}`);
      const response:AxiosResponse = await updateUserPassword(userId, newPassword) as AxiosResponse;
      
      // console.log(response.data.message);
      showToast(false, 'success', response.data.message, 3000, 'topCenter');
      setActiveRow('');
      setNewPassword('');
      setConfPassword('');
    }
    else {
      setNewPassword('');
      setConfPassword('');
      alert('Password do not match');
    }

  };


  
const handlePasswordChange = (event: React.MouseEvent<HTMLButtonElement>, userId: string) => {
  setActiveRow(userId);
};
 
  return (
    <>
      <div className='text-center font-poppins font-bold, text-4xl' >User Table</div>
     
    {
    users &&
    <table className="table-auto text-center">
    <thead className="bg-red-500 sticky top-0 text-white rounded-lg">
      <tr className="text-xs font-medium uppercase tracking-wide text-white">
        <th className="px-4 py-2">ID</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Email</th>
        <th className="px-4 py-2">Role</th>
        <th className="px-4 py-2">Change Password</th>
        <th className="px-4 py-2">Delete User</th>
      </tr>
    </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-gray-700 border-b">
            <td className="px-4 py-2">{user._id}</td>
            <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2 underline text-blue-600 hover:text-blue-800 visited:text-purple-600"><a href={`/admin/user/${user._id}`}> {user.email}</a></td>
              <td className="px-4 py-2">
                <div className='flex flex-row'>
                <form onSubmit = {handleFormSubmit}  className="px-1">
                  <input type="hidden" name="id" value={user._id} />
                  <select name="role" id="role" value={user.role} data-user-id={user._id} onChange={handleUpdateRole}>
                    <option value="ADMIN" selected={user.role === 'ADMIN' ? true : false} >Admin</option>
                    <option value="MODERATOR" selected={user.role === 'MODERATOR' ? true : false}>Moderator</option>
                    <option value="CLIENT"selected={user.role === 'CLIENT' ? true : false} >Client</option>
                  </select>
                  <button className = "my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Update</button>
                  </form>
                  </div>
              </td>
              <td className="px-4 py-2">
               
                {activeRow === user._id ? (
                  <form onSubmit={(event) => handlePassFormSubmit(event, user._id!)}>
                    <label className=" px-4 py-2">New Password : </label>
                    <input className="border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 w-auto 
  focus-within:border-blue-500" type="password" value={newPassword} onChange={(event) => setNewPassword(event.target.value)} />
                    <label className=" px-4 py-2">Confirm Password : </label>
                  <input className="border border-gray-800 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 w-auto 
  focus-within:border-blue-500" type="password" value={confPassword} onChange={(event) => setConfPassword(event.target.value)} />
                    <button className="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Save</button>
                    <button className="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleOnCancelClick}>Cancel</button>
                </form>
              ) : (
                <button className="my-1 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(event) => handlePasswordChange(event, user._id!)}>Change Password</button>
              )}
              </td>
              <td className="px-4 py-2">
                <button className = {buttonClasses} value = {user._id} onClick={handleDeleteUser}>Delete User</button>
              </td>
            </tr>
            
          ))}
              
        </tbody>
        </table>
        
      }
      
      </>
  );
}

export default UsersTable;