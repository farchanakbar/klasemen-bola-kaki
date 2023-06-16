import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import {cn} from '../utils/cn';

function LigaList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/leagues')
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  return (
    <div className={cn(
      'w-[90%]',
      'mx-auto', 'mt-10',
      'pb-10'
    )}>
      <ul className={cn(
        'grid', 'grid-cols-1',
        'gap-5',
        'md:grid-cols-2',
        'xl:grid-cols-3'
      )}>
        {data.map((item) => (<li key={item.id}>
          <Link to={`/liga/${item.id}`}><div className={cn(
            'w-full',
            'border',
            'p-4',
            'bg-[#2B2730]',
            'rounded-md',
            'text-white',
            'cursor-pointer',
          )}>
           <div className={cn(
            'flex', 'justify-between', 'items-center'
           )}>
              <h3 className={cn(
                'text-xl',
                'font-semibold'
              )}>{item.name}</h3>
              <img className={cn(
                'bg-white',
                'rounded-md'
              )} width={100} src={item.logos.light} alt={item.name} />
           </div>
          </div></Link>
        </li>))}
      </ul>
    </div>
  )
}

export default LigaList