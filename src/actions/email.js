import { FETCH_EMAIL, FETCH_EMAIL_BY_START_END_DATE, VIEW_EMAIL, STORE_DATE } from './types';
import emailData from '../data/emailData';

export const fetchEmail = () => {
  const data = emailData.map(item => {
    item.remaining_email = item.receiver.length - 1;
    return item;
  });

  return {
    type: FETCH_EMAIL,
    payload: data
  };
}

export const fetchEmailByStartEndDate = (payload) => {
  const { startDate, endDate } = payload;
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();
  const data = emailData.filter(item => {
    let itemDate = new Date(item.date).getTime();
    return itemDate >= start && itemDate <= end;
  });

  return {
    type: FETCH_EMAIL_BY_START_END_DATE,
    payload: data,
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

export function storeDate(date) {
  return {
    type: STORE_DATE,
    payload: date
  };
}
