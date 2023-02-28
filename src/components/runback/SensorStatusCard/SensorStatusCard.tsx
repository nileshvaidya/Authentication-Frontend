import React from 'react'
import { red } from '../../../assets'

const SensorStatusCard = () => {
  return (
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-blue-700">
     
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>Wrap Reel A Settings</h2>
    </div>
    <div className="flex mt-4 h-16 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-3 pl-2  text-gray-50 text-2xl">
          <h2>Home : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mr-8 pr-8 mt-2 mb-2 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-2 pl-2  text-gray-50 text-2xl">
          <h2>Cycle Count : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mt-1 mr-8 pr-8  mb-1 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-2 pl-2  text-gray-50 text-2xl">
          <h2>OSC Sensor Left : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mr-8 pr-8 mt-1 mb-1 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-2 pl-2  text-gray-50 text-2xl">
          <h2>OSC Sensor Right : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mt-1 mr-8 pr-8  mb-1 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-2 pl-2  text-gray-50 text-2xl">
          <h2>Cylinder Home : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mt-1 mr-8 pr-8  mb-1 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
    <div className="flex mt-4 rounded-lg border border-spacing-4 border-blue-700">
    <div className="w-2/3 mt-2 pl-2  text-gray-50 text-2xl">
          <h2>Empty Position : </h2>
          
    </div>
    <div className="w-1/3 pl-2 mt-1 mr-8 pr-8  mb-1 text-gray-50 text-xl">
    <img className="w-12 h-12 ml-10" src={red} alt="image" />
      </div>
  </div>
  <div className=" bg-gray-800 flex-1 flex-row text-xl mt-4 text-gray-50 ">
        <div className=" bg-gray-800 w-1/5"/>
        <div className="  bg-gray-900 pl-2 h-16 rounded-xl border-2 border-yellow-700">
          <input type="checkbox" className=" mt-6 pl-4 mr-4 " id="checkbox" /> 
          <label htmlFor="checkbox">Read at : </label>
          <input type="text" className="w-12 border border-gray-500 pl-2" id="interval" />
          <label htmlFor="checkbox"> secs interval </label>
          <button className="bg-blue-500 text-white ml-6 py-2 px-4 rounded-xl" >Read Once</button>
        </div>
      </div>
    
  </div>
)
}

export default SensorStatusCard
