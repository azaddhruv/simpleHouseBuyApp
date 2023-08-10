import React, { useState } from 'react';
import './Navbar.css';
import { HiMiniEnvelopeOpen } from 'react-icons/hi2';
import { RiArrowDropDownLine } from 'react-icons/ri';

function Navbar() {
  const [activeLink, setActiveLink] = useState('rent');
  const changeActiveLink = (str) => {
    setActiveLink(str);
  };
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <div className='navbar__header'>
          <HiMiniEnvelopeOpen className='nav__icon' />
          <h1>Estatery</h1>
        </div>

        <ul className='navbar__links'>
          <li
            onClick={() => changeActiveLink('rent')}
            className={`${activeLink == 'rent' ? 'navbar__active' : ''}`}
          >
            Rent
          </li>
          <li
            onClick={() => changeActiveLink('buy')}
            className={`${activeLink == 'buy' ? 'navbar__active' : ''}`}
          >
            Buy
          </li>
          <li
            onClick={() => changeActiveLink('sell')}
            className={`${activeLink == 'sell' ? 'navbar__active' : ''}`}
          >
            Sell
          </li>
          <li
            onClick={() => changeActiveLink('property')}
            className={`${activeLink == 'property' ? 'navbar__active' : ''}`}
          >
            Manage Property
            <RiArrowDropDownLine className='drop' />
          </li>
          <li
            onClick={() => changeActiveLink('resource')}
            className={`${activeLink == 'resource' ? 'navbar__active' : ''}`}
          >
            Resources <RiArrowDropDownLine className='drop' />
          </li>
        </ul>
      </div>

      <div className='navbar__buttons'>
        <button className='navbar__btn__login'>Login</button>
        <button className='navbar__btn_signup'>Sign up</button>
      </div>
    </div>
  );
}

export default Navbar;
