import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBrewery, setLoading } from '../actions/breweriesActions';
import {
  getLocationFromBreweries,
  getBeersType,
  getBreweryName,
} from '../utils/breweryDetails';
import BeerItem from './BeerItem';
import { Spinner } from './layout/Spinner';
import { Navbar } from './layout/Navbar';

export const Brewery = ({
  getBrewery,
  setLoading,
  brewery,
  match,
  loading,
}) => {
  useEffect(() => {
    getBrewery(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  const [beerType, setBeerType] = useState('');

  const onChangeBeerType = (e) => {
    setBeerType(e.target.value);
  };

  const filteredBeersByType = () => {
    const filteredBeers = brewery
      .filter((el) => {
        return el.style.shortName !== null && el.style.shortName !== undefined;
      })
      .filter((el) => {
        let name = el.style.shortName;
        return beerType === name;
      });
    if (!beerType) {
      return brewery;
    }
    return filteredBeers;
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container' id='brewery'>
        <Navbar />
        <div className='brewery-info'>
          {brewery.length > 0
            ? getBreweryName(brewery).reduce((breweryName, index) => (
                <span key={index} value={breweryName} id='brewName'>
                  <h1>{breweryName}</h1>
                </span>
              ))
            : null}
          {brewery.length > 0
            ? getLocationFromBreweries(brewery).map((location, index) => (
                <span key={index} brewery={location}>
                  ({location})
                </span>
              ))
            : null}
          <h3>Check out our beers</h3>
        </div>

        <div className='dropdown'>
          <select
            onChange={onChangeBeerType}
            value={beerType}
            name='beerType'
            multiple={false}
          >
            <option>Select Type</option>
            {brewery.length &&
              getBeersType(brewery).map((beerType, index) => (
                <option key={index} value={beerType}>
                  {' '}
                  {beerType}
                </option>
              ))}
          </select>
        </div>
        <div className='beers-list'>
          <ul className='list-group list-group-flush'>
            {brewery.length > 0 ? (
              filteredBeersByType().map((beer, index) => {
                return <BeerItem key={index} beer={beer} />;
              })
            ) : (
              <p>Sorry! Nothing found for this brewery.</p>
            )}
          </ul>
        </div>
      </div>
    );
  }
};

Brewery.propTypes = {
  brewery: PropTypes.array.isRequired,
  getBrewery: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  brewery: state.breweries.brewery,
  loading: state.breweries.loading,
});

export default connect(mapStateToProps, { getBrewery, setLoading })(Brewery);
