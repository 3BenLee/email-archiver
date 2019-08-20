// import {  GET_DATES } from '../actions/types';

// const initialState = {
//   dates: {
//     startDate:'',
//     endDate:'',
//   }
// }

// export default function(state = initialState, action) {
//   switch(action.type) {
//     case GET_DATES:
//         console.log('Hey from Reducer!', action.payload);
//       return {
//         ...state,
//         dates: {
//           startDate: action.payload.start,
//           endDate: action.payload.end
//         }
//       }
//     default:
//       return state;
//   }
// }