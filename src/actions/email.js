import { FETCH_EMAIL, VIEW_EMAIL } from './types';
import emailData from '../data/emailData';

export const fetchEmail = () => {
  const data = emailData.map(item => {
    item.remaining_email = item.receiver.length - 1;
    return item;
  })

  return {
    type: FETCH_EMAIL,
    payload: data
  };
}

export function viewEmailBody(emails = [], selectedEmailId) {
  const data = emails.map(item => {
    if (item.id === selectedEmailId) {
      item.is_expanded = !item.is_expanded;
    }
    return item;
  });

  return {
    type: VIEW_EMAIL,
    payload: data
  };
}