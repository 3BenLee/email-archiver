import { FETCH_EMAIL, VIEW_EMAIL, GET_DATES } from '../actions/types';
import Moment from 'moment';
import { extendMoment } from 'moment-range';

const moment = extendMoment(Moment);

const initialState = {
  emailData: [],
  dates: {
    startDate:'',
    endDate:'',
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case GET_DATES:
        console.log('Hey from Reducer!', action.payload);
      return {
        ...state,
        dates: {
          startDate: action.payload.start,
          endDate: action.payload.end
        }
      }
    case FETCH_EMAIL:
        const range = moment.range(initialState.dates.startDate, initialState.dates.endDate);
        console.log('FETCH_EMAIL',initialState.emailData, range);
        // if (initialState.emailData.date.within(range))
      return {
        ...state,
        emailData: action.payload
      }
    case VIEW_EMAIL:
      return {
        ...state,
        emailData: action.payload
      }
    default:
      return state;
  }
}