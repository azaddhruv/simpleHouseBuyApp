import React, { useState } from 'react';
import './Search.css';
import data from '../../dummyData.js';
import findMaxPrice from '../utils/findMaxPrice';
import listTypes from '../utils/listTypes';

//icons

function Search({ filterHandler }) {
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('0,500');
  const [type, setType] = useState('Villa');
  const [selectedDate, setSelectedDate] = useState('');

  //data functions
  const maxPrice = findMaxPrice(data);
  const list = listTypes(data);

  const handleSearch = () => {
    const gotFiltered = filterHandler(location, price, type, selectedDate);
  };

  return (
    <div className='search'>
      <h1>Search properties to rent</h1>
      <div className='search__bar'>
        <div className='bar__item'>
          <p>Location</p>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Enter Location'
            type='text'
            name=''
            id=''
          />
        </div>
        <div className='bar__item'>
          <p>When</p>
          <input
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            type='date'
          />
        </div>
        <div className='bar__item'>
          <p>Price</p>
          <select
            onChange={(e) => setPrice(e.target.value)}
            placeholder='Range'
            className='input'
            name='price'
            id=''
          >
            {(() => {
              const options = [];
              for (let i = 0; i <= maxPrice + 500; i += 500) {
                options.push(
                  <option key={i} value={`${i},${i + 500}`}>
                    ${i} - ${i + 500}
                  </option>
                );
              }
              return options;
            })()}
          </select>
        </div>
        <div className='bar__item'>
          <p>Property Type</p>
          <select
            onChange={(e) => setType(e.target.value)}
            className='input'
            name='type'
            id=''
          >
            {list.map((element, index) => {
              return (
                <option key={index} value={element}>
                  {element}
                </option>
              );
            })}
          </select>
        </div>

        <button type='button' className='item__btn' onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
