import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link to='/'>
        <i className='fas fa-home fa-3x' id='homeIcon'></i>
        <br /> Home
      </Link>
      <Link to='/breweries'>
        <i className='fas fa-beer fa-3x' id='brewIcon'></i>
        <br />
        Breweries
      </Link>
    </nav>
  );
};
export default Navbar;
