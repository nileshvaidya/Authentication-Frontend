import React from 'react'
interface TableRow {
  column1: string;
  column2: string;
  column3: string;
  column4: string;

 
}

interface MyTableProps {
  data: TableRow[];
}
const OperationLogCard: React.FC<MyTableProps> = ({data}) => {
  return (
    <>
     <div className='text-4xl bg-red-900 text-white text-center mt-4 mb-4 font-poppins font-semibold border-2 border-blue-700 rounded-xl'>Operation Log</div>
    <div className='overflow-auto h-3/4 border-2 border-yellow-900 rounded-xl'>
     
    <table className="table-auto w-full text-left ">
        <thead className='bg-blue-900 font-poppins text-white text-2xl text-center'>
            <tr>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Sr No</th>
                <th className="w-2/10 border-2 border-gray-800 px-4 py-2">Action</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Description</th>
                <th className="w-1/10 border-2 border-gray-800 px-4 py-2">Date Time</th>
               
            </tr>
        </thead>
        <tbody>
                {data.map((row:TableRow, index:number) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-400" : "bg-gray-600"}>
                        <td className="w-1/6 border-2 border-gray-800 px-4 py-1">{row.column1}</td>
                        <td className="w-1/6 border-2 border-gray-800 px-4 py-1">{row.column2}</td>
                        <td className="w-1/2 border-2 border-gray-800 px-4 py-1">{row.column3}</td>
                        <td className="w-1/6 border-2 border-gray-800 px-4 py-1">{row.column4}</td>
                       
                    </tr>
                ))}
            </tbody>
      </table>
      </div>
      </>
);
}

export default OperationLogCard
