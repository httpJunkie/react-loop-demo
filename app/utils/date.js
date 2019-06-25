import * as constants from './constants';
export function getCurrentDate(mode = '', formatChar = '/') {

  let currentDate = new Date();
  let date = currentDate.getDate();
  let month = currentDate.getMonth() + 1;
  let year = currentDate.getFullYear();
  let defaultDate = `${year}/${month < 10 ? `0${month}` : `${month}`}/${date}`;

  if(formatChar.length > 1) {
    return defaultDate;
  }
  if (mode === 'full') {
    return `${year}${formatChar}${month < 10 ? `0${month}` : `${month}`}${formatChar}${date}`;
  }

  if (mode === 'month-year') {
    return `${month < 10 ? `0${month}` : `${month}`}${formatChar}${year}`
  }
  if (mode === 'year-month') {
    return `${year}${formatChar}${month < 10 ? `0${month}` : `${month}`}`
  }
  if (mode === 'month-date' || mode === 'month-day') {
    return `${month < 10 ? `0${month}` : `${month}`}${formatChar}${date}`
  }
  if (mode === 'date-month' || mode === 'day-month') {
    return `${date}${formatChar}${month < 10 ? `0${month}` : `${month}`}`
  }

  if (mode === 'year') {
    return `${year}`;
  }
  if (mode === 'month') {
    return `${month < 10 ? `0${month}` : `${month}`}`;
  }
  if (mode === 'month-name') {
    return `${constants.monthName[month]}`;
  }
  if (mode === 'month-name-short') {
    return `${constants.monthName[month].substring(0,3)}`;
  }
  if (mode === 'month-name-upper') {
    return `${constants.monthName[month].toLocaleUpperCase()}`;
  }
  if (mode === 'month-name-short-upper') {
    return `${constants.monthName[month].substring(0,3).toLocaleUpperCase()}`;
  }
  if (mode === 'date' || mode === 'day') {
    return `${date}`;
  }
}