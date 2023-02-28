import React from 'react'

const Legends = () => {
  return (
    <div>
    <div className="flex">
      <div className=" text-gray-50 text-2xl">
        <div className='flex'>
          <div className='ml-4 mt-6 w-10 h-10 border-8 border-red-700 p-4 shadow-2xl'></div>
          <h2 className='mt-8 ml-6 mr-6'>Locked Wrap Reel </h2>
          </div>
      </div>
      <div className=" text-gray-50 text-2xl">
        <div className='flex'>
          <div className='ml-4 mt-6 w-10 h-10 border-8 border-orange-700 p-4 shadow-2xl'></div>
          <h2 className='mt-8 ml-6 mr-6'>Un-emptied Wrap Reel </h2>
          </div>
      </div>
      <div className=" text-gray-50 text-2xl">
        <div className='flex'>
          <div className='ml-4 mt-6 w-10 h-10 border-8 border-green-700 p-4 shadow-2xl'></div>
          <h2 className='mt-8 ml-6 mr-6'>Empty Wrap Reel </h2>
          </div>
      </div>
      </div>
      </div>
  )
}

export default Legends
