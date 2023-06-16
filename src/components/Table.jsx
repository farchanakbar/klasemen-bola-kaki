import React from 'react';

function Table({data}) {

  return (
    <div className="overflow-x-auto mt-5">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className='bg-slate-500 text-white'>
            <th scope="col" className="sticky left-0 z-10 px-3 py-3 text-left font-medium uppercase tracking-wider bg-slate-500">Pos</th>
            <th scope="col" className="sticky left-0 z-10 px-[66px] py-3 font-medium uppercase md:text-start text-center bg-slate-500">Team</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Main</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Point</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Menang</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Seri</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Kalah</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">Goal</th>
            <th scope="col" className="px-3 py-3 text-center font-medium uppercase tracking-wider">-/+</th>
          </tr>
        </thead>
        <tbody className="divide-y text-white divide-gray-200">
          {data.standings?.map((item, index) => (<tr key={index + 1}>
            <td className="sticky text-start left-0 z-10 px-6 py-4">
              {index + 1}
            </td>
            <td className="sticky bg-[#27374d] flex items-center gap-3 left-0 z-10 px-6 py-4">
              <img width={30} src={item?.team?.logos?.[0]['href']} alt={item.team?.name} />
              <h3>{item.team.shortDisplayName}</h3>
            </td>
            <td className='text-center'>{item.stats[0]?.value}</td>
            <td className='text-center'>{item.stats[3]?.value}</td>
            <td className='text-center'>{item.stats[7]?.value}</td>
            <td className='text-center'>{item.stats[6]?.value}</td>
            <td className='text-center'>{item.stats[1]?.value}</td>
            <td className='text-center'>{item.stats[5]?.value}</td>
            <td className='text-center'>{item.stats[2]?.value}</td>
          </tr>))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;