import React, {useState, useEffect} from 'react'
import axios from '../api/axios';

function DropDown({season}) {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState(" ");

  useEffect(() => {
    axios.get('/leagues/eng.1/seasons')
    .then(response => {
      setData(response.data.data.seasons);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const handleYearChange = (event) => {
    season(event.target.value);
    setSelectedYear(event.target.value);
  };
  // console.log(selectedYear);
  // console.log(data.map((item) => item.year));

  return (
    <div>
      <label className='text-white' htmlFor="year">Pilih Tahun : </label>
      <select id="year" value={selectedYear} onChange={handleYearChange}>
        <option value="">Tahun</option>
        {data.map((season) => (
          <option key={season.year} value={season.year}>
            {season.year}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown