import React from 'react';
import './House.css';

//icons
// import { BiBed } from 'react-icons/fa';
import { BiBed } from '@react-icons/all-files/bi/BiBed';
import { BiBath } from '@react-icons/all-files/bi/BiBath';
import { RxDimensions } from 'react-icons/rx';
import { AiOutlineHeart } from 'react-icons/ai';

function House({
  name,
  price,
  img,
  bathroom,
  beds,
  dimension,
  address,
  type,
  availableFrom,
}) {
  // console.log(availableFrom);
  return (
    <div className='house'>
      <img src={img} alt='' />
      <div className='house__middle'>
        <div className='middle__top'>
          <p>
            <span className='text__purple'>${price}</span>/month
          </p>
          <AiOutlineHeart className='heart__outline' />
        </div>
        <h3>{name}</h3>
        <p>{address}</p>
        <div className='rule'></div>
        <div className='middle__bottom'>
          <p>
            <BiBed className='bottom__icon' /> {beds}Beds
          </p>
          <p>
            <BiBath className='bottom__icon bath' /> {bathroom}
            Bathrooms
          </p>
          <p>
            <RxDimensions className='bottom__icon rotate' /> {dimension}
            <sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  );
}

export default House;
