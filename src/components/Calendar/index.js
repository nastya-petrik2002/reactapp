import React, { Component } from 'react';
import Day from './Day';
import Month from './Month';
import styles from './Calendar.module.scss';
import propTypes from 'prop-types';

const Calendar = ({ currentDate }) => {
  return (
    <article className={styles.container}>
      <Day currentDate={currentDate} />
      <Month date={currentDate} currentDate={currentDate} />
    </article>
  );
};
Calendar.propTypes = {
  currentDate: propTypes.instanceOf(Date),
};
Calendar.defaultProps = {
  currentDate: new Date(),
};
export default Calendar;
