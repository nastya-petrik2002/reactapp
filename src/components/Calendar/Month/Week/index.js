import React from 'react';
import { getDate, setDate, parse } from 'date-fns';
import Day from './CalendarDate';

function Week(props) {
  const { currentDate, week, year } = props;
  const getWeek = () => {
    const start = parse(`${year} ${week}`, 'Y w', new Date());
    const days = [];
    for (let i = 0; i < 7; i++) {
      const date = setDate(start, getDate(start));
      days.push(<Day key={date} date={date} currentdate={currentDate} />);
      start.setDate(getDate(start) + 1);
    }
    return days;
  };
  return <ul> {getWeek()} </ul>;
}
export default Week;
