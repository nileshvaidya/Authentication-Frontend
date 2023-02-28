
import React, { useContext } from 'react';
// import Home from '../../../pages/runback/Home/Home';

// import { sendLogoutRequest } from '../../../apiCalls';
// import roles from '../../../utils/constants';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
 

export const Header = () => {
  // const {isLoggedIn, updateIsLoggedIn, role, updateUserRole } = useContext(AuthContext) as AuthContextData;
  const isLoggedIn = useSelector((state: RootState) => state.userState.isLoggedIn)
  const role = useSelector((state: RootState) => state.userState.role);
  const handleLogout = () => {
    // sendLogoutRequest().then(() => setUser({
    //   isLoggedIn: false,
    //   name: '',
    //   email: '',
    //   role:'CLIENT'
    // }));
    // console.log("Loggedin status changed to false..." );
    
  }

  

  
  return (
    <nav className="bg-gray-700 p-2 flex justify-between items-center">
      <div className="text-white">
        <h1 className="text-4xl font-medium font-poppins">Runback System</h1>
      </div>
      <div className="flex">
       
        
        
        {!isLoggedIn && <><a href="/user/register" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Register</a>
        
          <a href="/login" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Login</a></>}
          {isLoggedIn &&
          <>
              <a href="/home" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Home</a>        
          </>
          }
        {isLoggedIn && role === 'ADMIN' &&
          <>
          <a href="/admin/manageuser" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Manage User</a>
          <a href="/admin/register" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Register User</a>
          </>
        }
        {isLoggedIn &&
          <>
         
         
          <a href="/user/profile" className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Profile</a>

          <a href="/" onClick={handleLogout} className="px-2 py-1 text-xl text-white hover:bg-gray-700 rounded-md">Logout</a>
          </>
        }
       
      </div>
    </nav>
  );
}

