import React from 'react'

const LogCard = () => {
  return (
    <div className="w-500 bg-gray-900 p-4 rounded-lg border border-spacing-4 border-white">
    <div >
      <h2 className='text-4xl text-gray-50 font-poppins font-semibold text-center'>Log - 20-01-2023</h2>
    </div>
    <div><p className="text-white p-2 mt-10 text-xl">12:40:12 : Cycle no 3 completed</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:44:32 : New Product Scanned - Product Code - XXX-xx-XXX</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:45:45 : Wrap Reel Started</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:45:46 : Wrap Reel not emptied for 2 cycles</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:45:47 : Counts Received - 100 Adjusted Counts - 85</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:48:35 : Wrap Reel Emptied</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:55:32 : Wrap Real Started</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:55:32 : Wrap Reel not emptied for 0 cycles</p></div>

<div><p className="text-white p-2 mt-1 text-xl"> 12:55:32 : Counts Received - 100
Adjusted Counts - 100</p></div>

</div>
  )
}

export default LogCard
