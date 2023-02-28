import React from 'react'
import {data} from './dummyData';

interface TableRow {
  column1: string;
  column2: string;
  column3: string;
  column4: string;
  column5: string;
  column6: string;
 
}

interface MyTableProps {
  data: TableRow[];
}

const ProductMasterCard: React.FC<MyTableProps> = ({data}) => {
  return (
    <>
     <div className='text-4xl bg-gray-900 text-white text-center mt-4 mb-4 font-poppins font-semibold border-2 border-blue-700 rounded-xl'>Product Master</div>
    <div className='overflow-auto h-3/4 border-2 border-blue-700 rounded-xl'>
     
    <table className="table-auto w-full text-left ">
        <thead className='bg-blue-gray-600 font-poppins text-white text-2xl text-center'>
            <tr>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Sr No</th>
                <th className="w-2/10 border-2 border-gray-800 px-4 py-2">Product Code</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Tex</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Current Count</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Updated On</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Update Method</th>
                <th className="w-2/10 border-2 border-gray-800 px-4 py-2">Actions</th>
            </tr>
        </thead>
        <tbody>
                {data.map((row:TableRow, index:number) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-400" : "bg-gray-600"}>
                        <td className="border-2 border-gray-800 px-4 py-1">{row.column2}</td>
                        <td className="border-2 border-gray-800 px-4 py-1">{row.column3}</td>
                        <td className="border-2 border-gray-800 px-4 py-1">{row.column4}</td>
                        <td className="border-2 border-gray-800 px-4 py-1">{row.column5}</td>
                        <td className="border-2 border-gray-800 px-4 py-1">{row.column6}</td>
                        <td className="border-2 border-gray-800 px-4 py-1">
                            <button className="bg-blue-500 text-white py-1 px-2 rounded-lg text-xl">Update Manually</button>
                        </td>
                    </tr>
                ))}
            </tbody>
      </table>
      </div>
      </>
);
}

export default ProductMasterCard
