import axios from 'axios';
import { GET_BREWERIES, GET_BREWERY, GET_BEER, SET_LOADING } from './types';

// Set Loading
export const setLoading = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
  });
};

// GET BREWERIES
export const getBreweries = () => async (dispatch) => {
  setLoading(true);

  const res = await axios.get(`http://localhost:5000/api/breweries`);

  console.log(res.data);

  dispatch({
    type: GET_BREWERIES,
    payload: res.data,
    loading: false,
  });
};

// GET BREWERY
export const getBrewery = (id) => async (dispatch) => {
  setLoading();

  const res = await axios.get(`http://localhost:5000/api/brewery/${id}`);

  console.log(res.data);

  dispatch({
    type: GET_BREWERY,
    payload: res.data,
  });
};

// GET BEER
export const getBeer = (id) => async (dispatch) => {
  setLoading();

  const res = await axios.get(`http://localhost:5000/api/beer/${id}`);

  console.log(res.data);

  dispatch({
    type: GET_BEER,
    payload: res.data,
  });
};
