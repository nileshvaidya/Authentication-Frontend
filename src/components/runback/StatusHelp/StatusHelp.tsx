import React from 'react'

const StatusHelp = () => {
  return (
    
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-white">
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>Status Help</h2>
    </div>
      <div className="w-500 bg-gray-900 mt-4 pl-2 rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Home Sensor</p>
      <div><p className="text-white pl-2 mb-1 text-lg">Indication if Wrap Reel is in Home position or not</p></div></div>
      <div className="w-500 bg-gray-900 mt-4 pl-2  rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Cycle Count</p>
      <div><p className="text-white pl-2 mb-1 text-lg">Indication no times Rell has rotated.</p></div></div>
      <div className="w-500 bg-gray-900 mt-4 pl-2 rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Oscillating Sensors</p>
      <div><p className="text-white pl-2 mb-4 text-lg">Indication if guide is oscillating properly. Left sensor indicates that left side is reached and right sensor indicates that right side is reached. </p></div></div>
      <div className="w-500 bg-gray-900 mt-4 pl-2 rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Cylinder Home</p>
      <div><p className="text-white pl-2 mb-1 text-lg">Push Cylinder is in correct position.</p></div></div>
      <div className="w-500 bg-gray-900 mt-4 pl-2 rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Cylinder Activation Button</p>
      <div><p className="text-white pl-2 text-lg">Indication if Wrap Reel clear cycle is activated.</p></div></div>
      <div className="w-500 bg-gray-900 mt-4 pl-2 rounded-lg border border-spacing-4 border-white" ><p className="text-white pl-2  text-xl">Data Fetch</p>
      <div><p className="text-white pl-2 text-lg">Fetch data once or fetch continuously at set interval.</p></div></div>




</div>
  )
}

export default StatusHelp
