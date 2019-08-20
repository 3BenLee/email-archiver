import { combineReducers } from 'redux';
import email from './email';
import dates from './dates';

export default combineReducers({
  email,
  dates
});
