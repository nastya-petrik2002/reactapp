import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.moodle.css';
import { format } from 'date-fns';

const Day = ({ currentDate }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.name}>{format(currentDate, 'iiii')}</div>
      <div className={styles.number}>{format(currentDate, 'd')}</div>
    </div>
  );
};
Day.PropTypes = {
  currentDate: PropTypes.instanceOf(Date).isRequired,
};
export default Day;
