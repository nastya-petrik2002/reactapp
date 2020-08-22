import React from 'react';

function SelectedUsers(props) {
  const { users } = props;
  const selectedUsersList = users.filter((u) => u.Selected);
  return (
    <ul>
      {selectedUsersList.map((u) => (
        <li key={u.id}>
          {u.fname} {u.id}
        </li>
      ))}
    </ul>
  );
}
export default SelectedUsers;
