import React from 'react'
import Navbar from '../../../components/runback/navbar';
import ProductMasterCard from '../../../components/runback/ProductMasterCard/ProductMasterCard';
import Sidebar from '../../../components/runback/Sidebar';
import {data} from '../../../components/runback/ProductMasterCard/dummyData'
const ProductMaster = () => {
  return (
    <>

        <div className="flex bg-gray-800 h-auto " >
            <div className="bg-gray-800 w-1/5">
                  <Sidebar />
            </div>
        
        
            <div className="flex-1 pl-4 pr-4 pt-4">
               
                <ProductMasterCard data={data}  />
           
        </div>
      </div>
     
        <div className="pl-96 bg-gray-800 flex flex-row-reverse text-xl pr-4 text-gray-50">
    
    <button className="bg-red-500 text-white w-48 ml-4 py-2 px-6 rounded-2xl">
        Close
          </button> 
         
          </div>

                
       
            </>
    
);
}

export default ProductMaster
