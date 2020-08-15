import React, { Component } from 'react';
import ListItem from './ListItem';
// parent -> child props
// child -> parent callback
const dbData = [
  {
    id: 1,
    fName: 'firstname1',
    lName: 'lastname1',
  },
  {
    id: 2,
    fName: 'firstname2',
    lName: 'lastname2',
  },
  {
    id: 3,
    fName: 'firstname3',
    lName: 'lastname3',
  },
  {
    id: 4,
    fName: 'firstname4',
    lName: 'lastname4',
  },
  {
    id: 5,
    fName: 'firstname5',
    lName: 'lastname5',
  },
];

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbData.map((u) => ({ ...u, isSelected: false })),
    };
  }
  mapUser = (user, index) => {
    const { users } = this.state;
    const selectUserH = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      this.setState({
        users: newUsers,
      });
    };
    return (
      <ListItem
        key={user.id}
        user={user}
        onSelect={selectUserH}
        isSelected={user.isSelected}
      />
    );
  };
  render() {
    const { users } = this.state;
    return <ul> {users.map(this.mapUser)} </ul>;
  }
}
export default UserList;
