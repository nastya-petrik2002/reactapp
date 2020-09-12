import React, { useState, useEffect, useMemo } from 'react';
import propTypes from 'prop-types';
import styles from './UserCard.module.scss';

function UserCardLoad(props){
    const{
        src,
        name: {title, first, last},
    } = props;
    const [isLoaded, setIsLoaded] = useState(false);
    const [img] = useState(new Image());
    useEffect(()=>{
        const handleLoad == () => setIsLoaded(true);
        imd.addEventListener('load',handleLoad);
        return() => {
            img.removeEventListener('load', handleLoad);
        };
        
    },[img]);
    useEffect(()=>{
        setIsLoaded(false);
        img.src=src;
    },[src]);
    return(
        <div className={styles.imageWrapper}>
            {isLoaded ? (
                <img src={src} alt={`${first} ${last}`} />
    ) : (
        <span className={styles.initials}>
            {first[0] ?? ''}
            {last[0] ?? ''}
        </span>
    )}
        </div>
    );
}
export default UserCardLoad;