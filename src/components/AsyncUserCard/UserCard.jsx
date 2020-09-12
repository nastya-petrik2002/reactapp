import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import styles from './UserCard.module.css';

function UserCard(props) {
  const { fullname, picture } = props;
  const [isChande, setIsChange] = useState(false);
  const wrapperClassName = classNames(stryles.innerWrapper, {
    [styles.innerWrapperChange]: isChange,
  });
}
const changeBtn = useMemo(() => <button onClick={() => setChange}></button>);
