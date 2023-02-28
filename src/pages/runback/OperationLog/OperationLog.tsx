import React from 'react'
import Navbar from '../../../components/runback/navbar';
import OperationLogCard from '../../../components/runback/OperationLogCard/OperationLogCard';
import Sidebar from '../../../components/runback/Sidebar';
import {data} from '../../../components/runback/OperationLogCard/dummyData'
const OperationLog = () => {
  return (
    <>
   
        <div className="flex bg-gray-800 h-auto " >
            <div className="bg-gray-800 w-1/5">
                  <Sidebar />
            </div>
        
        
            <div className="flex-1 pl-4 pr-4 pt-4">
               
                <OperationLogCard data={data}  />
           
        </div>
      </div>
     
        <div className="pl-96 bg-gray-800 flex flex-row-reverse text-xl pr-4 py-20 text-gray-50">
    
    <button className="bg-red-500 text-white w-48 ml-4 py-2 px-6 rounded-2xl">
        Close
          </button> 
         
          </div>

                
       
            </>
    
);
}

export default OperationLog
