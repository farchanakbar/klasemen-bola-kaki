import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

import DropDown from '../components/DropDown';
import Table from '../components/Table';
import {cn} from '../utils/cn';

function LigaDetail() {
  const [year, setYear] = useState('2022');
  const [data, setData] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    axios.get(`/leagues/${id}/standings?season=${year}&sort=asc`)
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, [year]);
  
  // console.log(year);
  // console.log(data);
  // console.log(data.standings);

  return (
    <div className={cn(
      'w-[90%]',
      'mx-auto',
      'mt-5',
      'mb-10'
    )}>
      <h1 className={cn(
        'text-3xl',
        'font-bold',
        'uppercase',
        'text-center', 'text-white'
      )}>Klasemen {data.name}</h1>
      <h1 className={cn(
        'text-xl', 'text-white',
        'font-semibold',
        'mt-5'
      )}>Tahun : {year}</h1>
      <DropDown season={setYear}/>
      <Table data={data} />
    </div>
  )
}

export default LigaDetail