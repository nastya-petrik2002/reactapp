import React from 'react';
import Week from './Week';
import styles from './Month.module.css';
import { getWeek, detWeeksInMonth, getWeeksInMonth } from 'date-fns';

function Month(props) {
  const {
    month: { name, number },
    year,
    currentdate,
  } = props;
  const getWeeks = () => {
    const firstWeek = getWeek(new Date(year, number, 1));
    const weeksInMonth = getWeeksInMonth(new Date(year, number, 1));
    const weeks = [];
    for (let i = firstWeek; i < firstWeek + weeksInMonth; i++) {
      weeks.push(
        <Week key={i} week={i} year={year} currentDate={currentdate} />
      );
    }
    return weeks;
  };
  return (
    <div>
      <div>
        {name} {year}
      </div>
      <ul>
        <li className={styles.dayName}>S</li>
        <li className={styles.dayName}>M</li>
        <li className={styles.dayName}>T</li>
        <li className={styles.dayName}>W</li>
        <li className={styles.dayName}>T</li>
        <li className={styles.dayName}>F</li>
        <li className={styles.dayName}>S</li>
      </ul>
      <div>{getWeeks()}</div>
    </div>
  );
}
export default Month;
