import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from '../api/axios';

import DropDown from '../components/DropDown';
import Table from '../components/Table';
import {cn} from '../utils/cn';

function LigaDetail() {
  const [data, setData] = useState([]);
  const {id} = useParams()

  useEffect(() => {
    axios.get(`/leagues/${id}/standings?season=2022&sort=asc`)
    .then(response => {
      setData(response.data.data);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);
  
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
        'text-center'
      )}>Klasemen {data.name}</h1>
      <Table data={data} />
    </div>
  )
}

export default LigaDetail