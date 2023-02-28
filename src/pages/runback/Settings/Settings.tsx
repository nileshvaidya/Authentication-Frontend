import React from 'react'
import LogCard from '../../../components/runback/LogCard/LogCard';
import MISSettingCard from '../../../components/runback/MISSettingCard/MISSettingCard';
import Navbar from '../../../components/runback/navbar';
import SettingsExplain from '../../../components/runback/SettingExplain/SettingsExplain';
import Sidebar from '../../../components/runback/Sidebar';
import WrapCard from '../../../components/runback/wrapcard/WrapCard';
import WrapSettingCard from '../../../components/runback/WrapSettingCard/WrapSettingCard';

const Settings = () => {
  return (
    <>
      <div className="flex flex-col ">
       <Navbar />
      </div>
        <div className="flex bg-gray-800 " >
            <div className="bg-gray-800 w-1/5">
                  <Sidebar />
            </div>
        
        
            <div className="flex-1 pl-4 pr-4 pt-4 pb-1">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <WrapSettingCard />
            <WrapSettingCard />
           <SettingsExplain />
            </div>
        </div>
      </div>
      <div className="flex-1 flex-row  bg-gray-800 pl-4 pr-4 pb-2">
      <div className="flex-1  bg-gray-800 ml-96 pb-2">
            <MISSettingCard />
        </div>
        </div>

        <div className="pl-96 bg-gray-800 flex flex-row-reverse text-2xl p-4 text-gray-50">
    
    <button className="bg-red-500 text-white w-48 ml-4 py-2 px-6 rounded-2xl">
        Close
          </button> 
          <button className="bg-blue-500 text-white w-48 py-2 px-4 mr-4 rounded-2xl">
        Settings
    </button>
          </div>

                
       
            </>
    
);
}

export default Settings
