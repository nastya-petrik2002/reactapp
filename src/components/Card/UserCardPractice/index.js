import React, { Container } from 'react';
import styles from './card.module.scss';

class Card extends Container {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.body}>
          <img className={styles.avatar} />
          <h2 className={styles.userName}>Alaina Wick</h2>
          <h3 className={styles.userWork}>Front-end Developer</h3>
          <div>text..</div>
          <button className={styles.but}>View Profile</button>
        </div>
      </div>
    );
  }
}

export default Card;
