import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../apiCalls/userAPI'
import { IUser } from '../../../apiCalls/types'
import Navbar from '../../../components/runback/navbar'
import { usersFail, usersPending, usersSuccess } from '../../../components/runback/usertable/userSlice'
import UsersTable from '../../../components/runback/usertable/UsersTable'

import { RootState } from '../../../store/store'
let response:IUser[];
const ManageUser = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  // const {isLoggedIn, updateIsLoggedIn, role, updateUserRole } = useContext(AuthContext) as AuthContextData;
  const userState = useSelector((state: RootState) => state.userState.isLoggedIn);
  const dispatch = useDispatch();
  let usersVal:IUser[];
  useEffect(() => {
    const fetchData = async () => {
      //   getUsers()
      //     .then(res => {
      //     setData(res.users)
      //   })
      //     .catch(err => {
      //       console.error(err);
      //   })
      // };
      // fetchData();
      dispatch(usersPending);
      try {
        usersVal = await getUsers() as IUser[];
        console.log("users....", usersVal);
        if (!usersVal) {
          return dispatch(usersFail)
        }
                                                                                                                                                                                                                                                                                                                                                                                  
        setUsers(usersVal);
        dispatch(usersSuccess);
         
      } catch (error) {
      
      }
    }
    fetchData();
    console.log("Logged In mangeuser : ", userState);
    // console.log("Role In manageuser : ", role);
      
  }, []);

  return (
    <>
      {users.length > 0 &&
      <UsersTable users={users} />}
    </>
  )
}

export default ManageUser