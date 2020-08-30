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
      <dl className={styles.row}>
        <dd className={styles.dayName}>S</dd>
        <dd className={styles.dayName}>M</dd>
        <dd className={styles.dayName}>T</dd>
        <dd className={styles.dayName}>W</dd>
        <dd className={styles.dayName}>T</dd>
        <dd className={styles.dayName}>F</dd>
        <dd className={styles.dayName}>S</dd>
      </dl>
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
