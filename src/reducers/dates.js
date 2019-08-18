import {  GET_DATES } from '../actions/types';

const initialState = {
  startDate:'',
  endDate:'',
};

export default function(state = initialState, action) {
  console.log('almost there!');
  switch(action.type) {
    case GET_DATES:
        console.log('Hey from Reducer!', action.payload.start);
      return {
        ...state,
        startDate: action.payload.start,
        endDate: action.payload.end
      }
    default:
      return state;
  }
}