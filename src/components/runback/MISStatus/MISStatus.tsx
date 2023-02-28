import React from 'react'

const MISStatus = () => {
  return (
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-blue-700">
     
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>MIS Settings</h2>
    </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
   
    <div className="w-full pl-2 mr-2 pr-2 mt-2 mb-1 h-16 text-gray-50 text-4xl rounded-xl">
    <input type="text" className="w-full border border-gray-500 p-2" id="ipaddress" />
      </div>
  </div>
  
  <div className="pl-2 bg-gray-900 flex-1 flex-row  text-2xl  text-gray-50">
    <input type="checkbox" className="pl-12 mr-4 " id="checkbox" />
        <label htmlFor="checkbox">Monitor Transactions with MIS</label>
 </div>
  </div>
)
}

export default MISStatus
