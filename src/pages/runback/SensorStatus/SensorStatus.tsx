import React from 'react'
import MISSettingCard from '../../../components/runback/MISSettingCard/MISSettingCard';
import SettingsExplain from '../../../components/runback/SettingExplain/SettingsExplain';
import Sidebar from '../../../components/runback/Sidebar';
import WrapSettingCard from '../../../components/runback/WrapSettingCard/WrapSettingCard';
import Navbar from '../../../components/runback/navbar';
import SensorStatusCard from '../../../components/runback/SensorStatusCard/SensorStatusCard';
import MISStatus from '../../../components/runback/MISStatus/MISStatus';
import StatusHelp from '../../../components/runback/StatusHelp/StatusHelp';
const SensorStatus = () => {
  return (
    <>
        <div className="flex bg-gray-800 " >
            <div className="bg-gray-800 w-1/5">
                  <Sidebar />
            </div>
        
        
            <div className="flex-1 w-4/5 pr-4 pt-4 pb-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <SensorStatusCard />
            <SensorStatusCard />
           <StatusHelp />
            </div>
        </div>
      </div>
      <div className="flex-1 flex-row  bg-gray-800 pr-4 pb-2">
      <div className="flex-1  bg-gray-800 ml-96 pb-2">
            <MISStatus />
        </div>
        </div>

        <div className="w-full pl-96 bg-gray-800 flex flex-row-reverse pb-7 text-2xl text-gray-50">
    
    <button className="bg-red-500 text-white w-48 ml-4 py-2 px-6 mr-4 rounded-2xl">
        Close
          </button> 
          <button className="bg-blue-500 text-white w-48 py-2 px-4 mr-4 rounded-2xl">
        Settings
    </button>
          </div>

                
       
            </>
    
);
}

export default SensorStatus
