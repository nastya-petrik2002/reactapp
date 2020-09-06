import React, { useState, useEffect } from 'react';
import styles from './FuncTimer.module.css';
import { format, startOfYear, addMilliseconds } from 'date-fns';

function Timer() {
  const [isRun, setisRun] = useState(false);
  const [time, setTime] = useState(startOfYear(new Date()));
  useEffect(() => {
    if (isRun) {
      const intervalId = setInterval(() => {
        setTime((prevValue) => addMilliseconds(prevValue, 1000));
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [isRun, time]);
  return (
    <div className={styles.container}>
      <h1 className={styles.timestyle}>{format(time, 'HH:mm:ss')}</h1>
      <button className={styles.but} onClick={() => void setisRun(!isRun)}>
        {isRun ? 'Stop' : 'Start'}
      </button>
      <button
        className={styles.but}
        onClick={() => {
          setTime(startOfYear(time));
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default Timer;
