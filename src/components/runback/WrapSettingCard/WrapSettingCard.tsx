import React from 'react'

const WrapSettingCard = () => {
  return (
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-blue-700">
     
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>Wrap Reel A Settings</h2>
    </div>
    <div className="flex mt-4">
    <div className="w-2/3 mt-4 p-2 text-gray-50 text-2xl">
          <h2>IP Address : </h2>
          
    </div>
    <div className="w-2/3 pl-2 mr-8 pr-8 mt-4 mb-3 text-gray-50 text-xl">
    <input type="text" className="border border-gray-500 p-2" id="ipaddress" />
      </div>
  </div>
  <div className="flex">
    <div className="w-2/3 p-2 mt-4 mb-3 text-gray-50 text-2xl">
      <h2>Port : </h2>
    </div>
    <div className="w-2/3 p-2 mr-8 pr-8 mt-4 mb-3 text-gray-50 text-xl">
    <input type="text" className="border border-gray-500 p-2" id="port" />
      </div>
  </div>
  <div className="flex">
    <div className="w-2/3 p-2 mt-2 mb-3 text-gray-50 text-xl">
      <h2>Default Count Adjustment : </h2>
    </div>
    <div className="w-2/3 p-2 mr-8 pr-8 mt-4 mb-3 text-gray-50 text-xl">
    <input type="text" className="border border-gray-500 p-2" id="count" />
      </div>
  </div>
  <div className="flex">
    <div className="w-2/3 p-2 mt-4 mb-3 text-gray-50 text-xl">
      <h2>Lock if not Emptied for : </h2>
    </div>
    <div className="w-2/3 p-2 mr-1 pr-1 mt-4 mb-1 text-gray-50 text-xl">
    <input type="text" className="border border-gray-500 p-2" id="port" />
        </div>
        <div className="w-1/3  pr-1 mt-7 mb-3 text-gray-50 text-xl">
      <h4>cycles </h4>
    </div>
  </div>
 
  </div>
)
  
}

export default WrapSettingCard
