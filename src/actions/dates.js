import { GET_DATES } from './types';

export const getDates = (start, end) => {
  console.log('Hello from action!');
  console.log('actions', start, end);
  return {
    type: GET_DATES,
    payload: start, end
  };
}
