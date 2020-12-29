import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getBeer, setLoading } from '../actions/breweriesActions';
import { Spinner } from './layout/Spinner';
import { Navbar } from './layout/Navbar';
import { useHistory } from 'react-router-dom';

const Beer = ({ beer, getBeer, loading, setLoading, match }) => {
  useEffect(() => {
    getBeer(match.params.id);
    setLoading();
    // eslint-disable-next-line
  }, []);

  let history = useHistory();
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='container' id='beer'>
        <Navbar />
        <div className='card' id='beerCard'>
          <div className='card-body'>
            <h1 className='card-title'>{beer.name}</h1>
            <p className='card-text'>{beer.description}</p>

            {beer.foodPairings !== undefined ? (
              <p className='card-text'>
                <b>Food Pairings:</b>
                <br />
                {beer.foodPairings}
              </p>
            ) : null}
          </div>
        </div>
        <button
          type='button'
          className='btn-secondary'
          onClick={() => history.goBack()}
        >
          <i className='fas fa-arrow-circle-left fa-3x'></i>
          <br />
          Back to Beers
        </button>
      </div>
    );
  }
};

Beer.propTypes = {
  beer: PropTypes.object.isRequired,
  getBeer: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  beer: state.breweries.beer,
  loading: state.breweries.loading,
});

export default connect(mapStateToProps, { getBeer, setLoading })(Beer);
