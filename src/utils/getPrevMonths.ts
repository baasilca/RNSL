import moment from 'moment';

const getPrevMonths = (months: number) => {
  const prevMonths = [];
  const dateStart = moment();
  const dateEnd = moment().subtract(months - 1, 'month');
  while (dateEnd.diff(dateStart, 'months') <= 0) {
    prevMonths.push(parseInt(dateStart.format('YYYYMM'), 10));
    dateStart.subtract(1, 'month');
  }
  return prevMonths;
};

export default getPrevMonths;
