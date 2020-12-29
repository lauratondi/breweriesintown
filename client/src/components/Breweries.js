import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBreweries, setLoading } from '../actions/breweriesActions';
import { BreweryItem } from './BreweryItem';
import { getUniqueLocations } from '../utils/breweryDetails';
import { Spinner } from './layout/Spinner';
import { Navbar } from './layout/Navbar';

const Breweries = ({ getBreweries, breweries, setLoading, loading }) => {
  useEffect(() => {
    getBreweries();
    setLoading();
    // eslint-disable-next-line
  }, []);

  const [text, setText] = useState('');
  const [countryFilter, setCountryFilter] = useState([]);

  const onChangeCountryFilter = (e) => {
    let countries = [...countryFilter];
    if (e.target.checked) {
      setCountryFilter([...countries, e.target.value]);
    } else {
      countries.splice(countries.indexOf(e.target.value), 1);
      setCountryFilter(countries);
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  const getFilteredBreweries = () => {
    return breweries.data.filter((brewery) => {
      return (
        (text
          ? brewery.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
          : true) &&
        (countryFilter.length > 0
          ? getUniqueLocations([brewery]).filter(
              (el) => countryFilter.indexOf(el) !== -1
            ).length > 0
          : true)
      );
    });
  };

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container' id='breweries'>
        <Navbar />
        <div className='filters'>
          <h1>Our Breweries</h1>
          <div className='search'>
            <input
              type='text'
              name='text'
              placeholder='Search by Name...'
              value={text}
              onChange={onChange}
            />
          </div>

          <div className='checkboxes'>
            {breweries.data.length > 0
              ? getUniqueLocations(breweries.data).map((location) => (
                  <>
                    <label>
                      <input
                        type='checkbox'
                        value={location}
                        checked={countryFilter.indexOf(location) > -1}
                        onChange={onChangeCountryFilter}
                      />
                      {location}
                    </label>
                  </>
                ))
              : null}
          </div>
        </div>
        <div className='breweries-list'>
          {breweries.data.length > 0
            ? getFilteredBreweries().map((brewery, index) => {
                return <BreweryItem key={index} brewery={brewery} />;
              })
            : null}
        </div>
      </div>
    );
  }
};

Breweries.propTypes = {
  getBreweries: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  breweries: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  breweries: state.breweries,
  loading: state.breweries.loading,
});

export default connect(mapStateToProps, {
  getBreweries,
  setLoading,
})(Breweries);
