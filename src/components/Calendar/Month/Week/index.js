import React from 'react';
import { eachDayOfInterval, startOfWeek, endOfWeek } from 'date-fns';
import CalendarDate from './CalendarDate';
import styles from './Week.module.scss';
import propTypes from 'prop-types';

const getWeekDays = ({ weekDate, date, currentDate }) =>
  eachDayOfInterval({
    start: startOfWeek(weekDate),
    end: endOfWeek(weekDate),
  }).map((dayDate) => (
    <CalendarDate
      key={date}
      dayDate={dayDate}
      date={date}
      currentDate={currentDate}
    />
  ));
const Week = (props) => <ul className={styles.row}>{getWeekDays(props)}</ul>;

Week.propTypes = {
  weekDate: propTypes.instanceOf(Date).isRequired,
  date: propTypes.instanceOf(Date).isRequired,
  currentDate: propTypes.instanceOf(Date),
};
Week.defaultProps = {
  currentDate: new Date(),
};
export default Week;

/*
function Week(props) {
  const { currentDate, week, year } = props;
  const getWeek = () => {
    const start = parse(`${year} ${week}`, 'Y w', new Date());
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = setDate(start, getDate(start));
      days.push(
        <Day key={date} date={date} currentdate={currentDate} />
      );
      start.setDate(getDate(start) + 1);
    }
    return days;
  };
  return <ul> {getWeek()} </ul>;
}
*/
