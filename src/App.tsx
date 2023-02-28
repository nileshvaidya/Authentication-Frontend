import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

 

import Index from './pages/runback/index/Index';
import Home from './pages/runback/Home/Home';
import Settings from './pages/runback/Settings/Settings';
import SensorStatus from './pages/runback/SensorStatus/SensorStatus';
import ProductMaster from './pages/runback/ProductMaster/ProductMaster';
import OperationLog from './pages/runback/OperationLog/OperationLog';
import Profile from './pages/runback/Profile.tsx/Profile';
import Register from './pages/runback/Register/Register';
import ManageUser from './pages/runback/manageuser/ManageUser';
import { ProtectedRoute } from './ProtectedRoute';
import { useCookies } from 'react-cookie';
import { useStateValue } from './store/StateProvider';
import { actionTypes } from './store/reducer';

import roles from './utils/constants';
import ProtectedAdminRoute from './ProtectedAdminRoute';
import { ContextDevTool } from "react-context-devtool";
import { Provider } from 'react-redux';
import { store } from './store/store';
// const queryClient = new QueryClient()
const App = () => {
  const [cookies ] = useCookies(["jwt"]);
  // const [{ token }, dispatch] = useStateValue();
  const [isLoggedIn, updateIsLoggedIn ] = useState(false);
  const [role, updateUserRole] = useState('CLIENT');
  
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<Index />}></Route>
          {/* <Route path="/home" element={<Home />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/sensorstatus" element={<SensorStatus />}></Route>
          <Route path="/productmaster" element={<ProductMaster />}></Route>
          <Route path="/operationlog" element={<OperationLog />}></Route> */}
          <Route path="/login" element={<Index />}></Route>
          {/* <Route path="/user/profile" element={<Profile />}></Route> */}
          {/* <Route path="/admin/manageuser" element={<ManageUser />}></Route>  */}
         

          <Route path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
           
           <Route path="/settings"
            element={
              <ProtectedRoute>
                <Settings />
              </ProtectedRoute>
            }
          />
           <Route path="/sensorstatus"
            element={
              <ProtectedRoute>
                <SensorStatus />
              </ProtectedRoute>
            }
          />
           <Route path="/productmaster"
            element={
              <ProtectedRoute>
                <ProductMaster />
              </ProtectedRoute>
            }
          />
           <Route path="/operationlog"
            element={
              <ProtectedRoute>
                <OperationLog />
              </ProtectedRoute>
            }
          />
           <Route path="/user/profile/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
           <Route path="/admin/user/:id"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          <Route path="/admin/manageuser"
            element={
              <ProtectedRoute>
                
                <ManageUser />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/manageuser"
            element={
              <ProtectedAdminRoute>
                
                <ManageUser />
              </ProtectedAdminRoute>
            }
          />
          <Route path="/admin/register"
            element={
              <ProtectedAdminRoute>
                
                <Register />
              </ProtectedAdminRoute>
            }
          />
          {/* <Route path="/admin/update-role"
            element={
              <ProtectedAdminRoute>
                
                <UpdateRole />
              </ProtectedAdminRoute>
            }
          /> */}
            
        </Routes>

      </Router>
    
  );
};

export default App

