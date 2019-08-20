import { FETCH_EMAIL, VIEW_EMAIL, FETCH_EMAIL_BY_START_END_DATE, STORE_DATE } from '../actions/types';

const initialState = {
  emailData: [],
  dates: {
    startDate: '2019/1/1',
    endDate: '2019/1/1',
  }
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_EMAIL_BY_START_END_DATE:
      return {
        ...state,
        emailData: action.payload
      }
    case FETCH_EMAIL:
      return {
        ...state,
        emailData: action.payload
      }
    case VIEW_EMAIL:
      return {
        ...state,
        emailData: action.payload
      }
    case STORE_DATE:
      const { startDate, endDate } = action.payload;
      return {
        ...state,
        dates: { startDate, endDate }
      }
    default:
      return state;
  }
}
