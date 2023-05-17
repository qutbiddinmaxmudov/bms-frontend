import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import dayOfYear from 'dayjs/plugin/dayOfYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';

dayjs.extend(weekday);
dayjs.extend(dayOfYear);
dayjs.extend(isLeapYear);

const dateRatio = (firstDate: Dayjs, secondDate: Dayjs) => {
  if (
    firstDate.isSame(dayjs().dayOfYear(dayjs().dayOfYear() - 1), 'day')
        && secondDate.isSame(dayjs().dayOfYear(dayjs().dayOfYear() - 1), 'day')
  ) {
    return 'yesterday';
  }

  if (
    firstDate.isSame(dayjs(), 'day')
        && secondDate.isSame(dayjs(), 'day')
  ) {
    return 'today';
  }

  if (
    firstDate.isSame(dayjs().dayOfYear(dayjs().dayOfYear() + 1), 'day')
        && secondDate.isSame(dayjs().dayOfYear(dayjs().dayOfYear() + 1), 'day')
  ) {
    return 'tomorrow';
  }

  if (
    firstDate.isSame(dayjs().weekday(0), 'day')
        && secondDate.isSame(dayjs().weekday(6), 'day')
  ) {
    return 'week';
  }

  if (
    firstDate.isSame(dayjs().date(1), 'day')
        && secondDate.isSame(dayjs().date(dayjs().daysInMonth()), 'day')
  ) {
    return 'month';
  }

  if (
    firstDate.isSame(dayjs().dayOfYear(1), 'day')
        && secondDate.isSame(dayjs().dayOfYear(dayjs(dayjs()).isLeapYear() ? 366 : 365), 'day')
  ) {
    return 'year';
  }

  return null;
};

type DatePeriod = 'yesterday' | 'today' | 'tomorrow' | 'week' | 'month' | 'year';

const setDatePeriod = (
  value: DatePeriod,
  firstDate: Dayjs,
  secondDate: Dayjs,
): { firstDate: Dayjs, secondDate: Dayjs } => {
  switch (value) {
    case 'yesterday':
      return {
        firstDate: dayjs().dayOfYear(dayjs().dayOfYear() - 1),
        secondDate: dayjs().dayOfYear(dayjs().dayOfYear() - 1),
      };
      break;
    case 'today':
      return {
        firstDate: dayjs(),
        secondDate: dayjs(),
      };
      break;
    case 'tomorrow':
      return {
        firstDate: dayjs().dayOfYear(dayjs().dayOfYear() + 1),
        secondDate: dayjs().dayOfYear(dayjs().dayOfYear() + 1),
      };
      break;
    case 'week':
      return {
        firstDate: dayjs().weekday(0),
        secondDate: dayjs().weekday(6),
      };
      break;
    case 'month':
      return {
        firstDate: dayjs().date(1),
        secondDate: dayjs().date(dayjs().daysInMonth()),
      };
      break;
    case 'year':
      return {
        firstDate: dayjs().dayOfYear(1),
        secondDate: dayjs().dayOfYear(dayjs(dayjs()).isLeapYear() ? 366 : 365),
      };
      break;
    default:
      return {
        firstDate,
        secondDate,
      };
      break;
  }
};

const getStringDate = (objectDate?: string | undefined) => dayjs(objectDate).format('D-MMMM-YYYY');
const getObjectDate = (stringDate?: Dayjs | undefined) => dayjs(stringDate, 'D-MMMM-YYYY');

export {
  dateRatio,
  setDatePeriod,
  getObjectDate,
  getStringDate,
};

export type {
  DatePeriod,
};
