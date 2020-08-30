import React from 'react';
import Week from './Week';
import styles from './Month.module.scss';
import { format, eachWeekOfInterval, startOfMonth, endOfMonth } from 'date-fns';
import propTypes from 'prop-types';
import classNames from 'classnames';

const getWeeks = ({ date, currentDate }) => {
  return eachWeekOfInterval({
    start: startOfMonth(date),
    end: endOfMonth(date),
  }).map((weekDate) => (
    <Week
      key={weekDate}
      weekDate={weekDate}
      date={date}
      currentDate={currentDate}
    />
  ));
};
const Month = (props) => {
  const { date } = props;
  const className = classNames(styles.box, styles.dayName);
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{format(date, 'LLLL y')}</div>
      <ul className={styles.row}>
        <li className={styles.dayName}>S</li>
        <li className={styles.dayName}>M</li>
        <li className={styles.dayName}>T</li>
        <li className={styles.dayName}>W</li>
        <li className={styles.dayName}>T</li>
        <li className={styles.dayName}>F</li>
        <li className={styles.dayName}>S</li>
      </ul>
      {getWeeks(props)}
    </div>
  );
};
Month.propTypes = {
  date: propTypes.instanceOf(Date).isRequired,
  currentDate: propTypes.instanceOf(Date),
};
Month.defaultProps = {
  currentDate: new Date(),
};
export default Month;
