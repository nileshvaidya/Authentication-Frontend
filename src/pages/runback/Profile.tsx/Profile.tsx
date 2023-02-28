import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../../apiCalls/userAPI';
import { IUser } from '../../../apiCalls/types';
import Navbar from '../../../components/runback/navbar'
import { useDispatch } from 'react-redux';
import { profileFail, profilePending, profileSuccess } from './profileSlice';
let firstRender = true;
let userEmail = '';
    let userRole = '';
    let usr = [];
const Profile = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [email1, setEmail1] = useState('');
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [user, setUser] = useState<IUser>();

  const fetchUser = async () => {
    dispatch(profilePending);
    try {
      const userProfile = await getUserProfile(id!) as IUser;
      console.log("userprofile....", userProfile);
      if (!userProfile) {
        return dispatch(profileFail)
      }
                                                                                                                                                                                                                                                                                                                                                                                
      setUser(userProfile);
      setRole(userProfile.role);
      setEmail1(userProfile.email);
      setName(userProfile.name);
      

      dispatch(profileSuccess);
       
    } catch (error) {
    
    }
  }
    
  
  
  useEffect(() => {
    
      fetchUser();
      // console.log("Logged In home from redux store : ", isLoggedIn);
      // console.log("Role In home : ", role);
      // console.log("Email : ", user.email);
      // console.log("Role : ", user.role);
//       const array = Object.values(user);
// console.log(array);
    // console.log(array);
      // console.log("User : ", array);
 
  });




  return (
    <>
    
      <div className=''>
  <div>
    <h2 className='text-lg font-bold'>ID</h2>
    <p className=''>{id}</p>
  </div>
  <div>
          <p className='text-lg font-bold'>Email/username</p>
          {email1 &&
          <p className=''>{email1}</p>}
  </div>
  <div>
          <p className='text-lg font-bold'>Role</p>
          {role &&
          <p className=''>{role}</p>}
  </div>
  <div>
          <p className='text-lg font-bold'>Name</p>
          {role &&
          <p className=''>{name}</p>}
  </div>
  <div>
          <p className='text-lg font-bold'>Role</p>
          {role &&
          <p className=''>{role}</p>}
  </div>
  <div>
    <p className="text-lg font-bold">User object</p>
          {user &&
         
        
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap">{JSON.stringify(user, null, 2)}</pre>
            </div>}
          </div>
</div>
    </>
  )
}

export default Profile
