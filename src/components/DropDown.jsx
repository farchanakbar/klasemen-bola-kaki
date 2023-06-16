import React, {useState, useEffect} from 'react'
import axios from '../api/axios';
import {RiArrowDownSLine} from 'react-icons/ri';

function DropDown() {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('/leagues/eng.1/seasons')
    .then(response => {
      setData(response.data.data.seasons);
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // console.log(data.map((item) => item.year));

  return (
    <div className="absolute z-20 mt-[-50px] right-0">
      <button
        className="px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm gap-1 flex items-center"
        onClick={toggleDropdown}
      >
        Tahun 
        <RiArrowDownSLine size={25} />
      </button>
      {isOpen && (
        <div className="z-20 w-[130px] h-[200px] overflow-y-auto mt-2 rounded-md shadow-lg">
          <ul className="py-1 bg-slate-700 rounded-md">
            {data.map((item) => (<li key={item.year}>
              <button className="block px-4 py-2 mx-auto text-white focus:outline-none">
                {item.year}
              </button>
            </li>))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropDown