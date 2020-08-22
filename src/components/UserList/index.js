import React from 'react';
import ListItem from './ListItem';

// parent -> child props
// child -> parent callback
/*
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
*/

const UserList = (props) => {
  const { users, setUsers } = props;
  const mapUser = (user, index) => {
    const selectUserH = () => {
      const newUsers = [...users];
      newUsers[index].isSelected = !newUsers[index].isSelected;
      setUsers(newUsers);
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
  return <ul> {users.map(mapUser)} </ul>;
};

export default UserList;
