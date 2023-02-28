import React from 'react'

const MISSettingCard = () => {
  return (
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-blue-700">
     
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>MIS Settings</h2>
    </div>
    <div className="flex mt-4">
    <div className="w-1/3 mt-4 p-2 text-gray-50 text-2xl">
          <h2>IP Address : </h2>
          
    </div>
    <div className="w-2/3 pl-2 mr-2 pr-2 mt-3 mb-1 text-gray-50 text-xl">
    <input type="text" className="w-2/3 border border-gray-500 p-2" id="ipaddress" />
      </div>
  </div>
  <div className="flex">
    <div className="w-1/3 p-2 mt-3  text-gray-50 text-2xl">
      <h2>Port : </h2>
    </div>
    <div className="w-2/3 p-2 mr-4 pr-2 mt-2 mb-1 text-gray-50 text-xl">
    <input type="text" className="w-2/3 border-2 border-gray-500 p-2" id="port" />
        </div>
        
  </div>
  <div className="pl-2 bg-gray-900 flex-1 flex-row  text-2xl  text-gray-50">
    <input type="checkbox" className="pl-12 mr-4 " id="checkbox" />
        <label htmlFor="checkbox">Send Operational Data to MIS</label>
 </div>
  </div>
)
}

export default MISSettingCard
