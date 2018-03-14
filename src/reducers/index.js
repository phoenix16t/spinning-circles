import { combineReducers } from 'redux';
import circles from './circles';
import menu from './menu';

const mainReducer = combineReducers({
  circles,
  menu
});

export default mainReducer;
