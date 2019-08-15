import { FETCH_EMAILS } from './types';
import emailData from '../data/emailData';

export const fetchEmails = () => dispatch => {
  dispatch({
    type: FETCH_EMAILS,
    payload: emailData
  });
}
