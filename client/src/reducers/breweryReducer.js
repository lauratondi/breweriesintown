import {
  GET_BREWERIES,
  GET_BREWERY,
  GET_BEER,
  SET_LOADING,
} from '../actions/types';

const initialState = {
  data: {},
  brewery: [],
  beer: {},
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BREWERIES:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_BREWERY:
      return {
        ...state,
        brewery: action.payload,
        loading: false,
      };
    case GET_BEER:
      return {
        ...state,
        beer: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
