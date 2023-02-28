import React, { useContext, useEffect, useState } from 'react'
import { getRefreshedToken, getUser } from '../../../apiCalls';
import { IRegisterType } from '../../../apiCalls/types';
import Legends from '../../../components/runback/Legends/Legends';
import LogCard from '../../../components/runback/LogCard/LogCard';
import Navbar from '../../../components/runback/navbar';
import Sidebar from '../../../components/runback/Sidebar';
import WrapCard from '../../../components/runback/wrapcard/WrapCard';
import { RootState, useAppSelector } from '../../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateIsLoggedIn, updateUserRole } from '../../../store/features/authSlice';
let firstRender = true;
const Home = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.userState.isLoggedIn)
  const role = useSelector((state: RootState) => state.userState.role);
  const [user1, setUser1] = useState<IRegisterType | undefined>(undefined);
  const [isLoggedInStatus, setIsLoggedInStatus] = useState(false);
  const [userRole, setUserRole] = useState('CLIENT');
  // const {isLoggedIn, updateIsLoggedIn, role, updateUserRole } = useContext(AuthContext) as AuthContextData;
  const refreshToken = async () => {
    const usr = await getRefreshedToken();
    setUser1(usr.user);
  }
  const fetchUser = async () => {
    const usr = await getUser();
    console.log(usr);
    
    // setUser1(usr.user)
    dispatch(updateIsLoggedIn(true))
    // setUserRole(usr.user.role)
    // dispatch(updateUserRole(userRole));
  
    console.log("Role In home fetch user : ", role);
    // console.log("Logged In home fetch user : ", isLoggedIn);
    // console.log("Role state In home fetch user : ", role);
  }
  
  useEffect(() => {
    if (firstRender) {
      firstRender = false;
      fetchUser();
      console.log("Logged In home from redux store : ", isLoggedIn);
      // console.log("Role In home : ", role);
    }
    let interval = setInterval(() => {
      refreshToken();
    
    }, 1000 * 29)

    return ()=> clearInterval(interval)
  }, []);


  return (
    <>

      {user1 && <h1>{user1.name} and {user1.role}</h1>}
        <div className="flex bg-gray-800" >
            <div className="bg-gray-800 w-1/5">
                  <Sidebar />
            </div>
        
        
            <div className="flex-1 pt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <WrapCard />
                  <WrapCard />
            <LogCard />
            </div>
        </div>
        </div>
        <div className=" pl-96 bg-gray-800 flex-1 ">
          <Legends />
          </div>
      <div className=" bg-gray-800 flex-1 flex-row text-2xl p-4 text-gray-50 ">
        <div className=" bg-gray-800 w-1/5"/>
        <div className="ml-96  bg-gray-900 p-6 rounded-xl border-2 border-yellow-700">
          <input type="checkbox" className=" pl-12 mr-4 " id="checkbox" /> 
          <label htmlFor="checkbox">Display Live Log</label>
        </div>
      </div>
      <div className="pl-96 bg-gray-800 flex flex-row-reverse text-2xl p-4 text-gray-50">
    
    <button className="bg-red-500 text-wh ite w-48 ml-4 py-2 px-6 rounded-2xl">
        Close
          </button> 
          <button className="bg-blue-500 text-white w-48 py-2 px-4 mr-4 rounded-2xl">
        Settings
    </button>
          </div>
                
       
            </>
    
);

}

export default Home
