import React, { useState } from 'react';
import Search from './Search';
import './ListContainer.css';
import data from '../../dummyData';
import House from './House';
import { max } from 'date-fns';

function ListContainer() {
  const [filtered, setFiltered] = useState(data);

  function onFilter(location, price, type, selectedDate) {
    console.log(type, 'type');
    let newData = [];
    const splitPrice = price.split(',');
    console.log(splitPrice, 'prices');
    const givenDate = new Date(selectedDate);
    data.map((house) => {
      if (
        house.name == location &&
        Number(splitPrice[0]) < house.price &&
        Number(splitPrice[1]) >= house.price &&
        house.availableFrom.getTime() > givenDate.getTime() &&
        house.type == type
      ) {
        newData.push(house);
      }
    });
    setFiltered(newData);

    return newData;
  }
  return (
    <div className='list'>
      <Search filterHandler={onFilter} />
      <div className='list__houses'>
        {filtered.map((house, i) => {
          return <House key={i} {...house} />;
        })}
      </div>
    </div>
  );
}

export default ListContainer;
