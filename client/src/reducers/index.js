import { combineReducers } from 'redux';
import breweryReducer from './breweryReducer';

export default combineReducers({
  breweries: breweryReducer,
});
