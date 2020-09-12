import React, { useState, useEffect } from 'react';
import styles from './UserCardPractice.module.scss';
import UserCard from './UserCard';
import UserFullName from './UserCard/UserFullName';

function UserCardPractice() {
    const [users, setUsers] = useState([]);
    const [isFetching, setisFeching] = useState(true);   
    useEffect(() => {
      async fetchUsers() {
        fetch('./userData/users.json')
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                this.setState({
                    users: res,
                    isFetching: false,
                    });
                })
            .catch(console.error);
        }
    });
    return fetchUsers;
}
export default UserCardPractice;