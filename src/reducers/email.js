import { FETCH_EMAIL, VIEW_EMAIL } from '../actions/types';

const initialState = {
  emailData: []
};

export default function(state = initialState, action) {
  switch(action.type) {
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
    default:
      return state;
  }
}