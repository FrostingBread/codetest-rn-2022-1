import moment from 'moment';

const getRemainDayString = (date: Date | undefined): string => {
  if (!!!date || date <= new Date()) return '';
  return moment(date).fromNow(true) + ' left';
};

export default getRemainDayString;
