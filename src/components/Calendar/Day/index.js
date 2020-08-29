import React from 'react';
import PropTypes from 'prop-types';
import styles from './Day.moodle.css';
import { format } from 'date-fns';

const Day = ({ currentDate }) => {
  return (
    <div>
      <div className={styles}>{dayName}</div>
      <div>{number}</div>
    </div>
  );
};
export default Day;
