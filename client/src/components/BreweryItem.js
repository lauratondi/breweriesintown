import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const BreweryItem = ({ brewery }) => {
  return (
    <div className='card'>
      {brewery.images ? (
        <img
          src={brewery.images.medium}
          className='card-img-top'
          alt='breweryImage'
        />
      ) : null}
      <div className='card-body'>
        <h1 className='card-title'>{brewery.name}</h1>
        <p className='card-text'>{brewery.description}</p>
        <Link to={`/brewery/${brewery.id}`} className='btn btn-primary'>
          Details
        </Link>
      </div>
    </div>
  );
};

BreweryItem.propTypes = {
  brewery: PropTypes.object.isRequired,
};
