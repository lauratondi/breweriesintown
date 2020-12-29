import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BeerItem = ({ beer }) => {
  return (
    <Fragment>
      <li className='list-group-item'>
        <Link to={`/beer/${beer.id}`} id='beerId'>
          {' '}
          <b>{beer.name} </b> - {beer.style.shortName}
        </Link>
      </li>
    </Fragment>
  );
};

BeerItem.propTypes = {
  beer: PropTypes.object.isRequired,
};

export default BeerItem;
