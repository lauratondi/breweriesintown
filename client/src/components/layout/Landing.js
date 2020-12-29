import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div id='landing'>
      <div className='landText'>
        <h1>Welcome</h1>
        <Link to='/breweries'>
          <button className='btn'>Check out our Breweries</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
