import React from 'react';
//import './UserListStyle.css';

const ListItem = (props) => {
  const {
    isSelected,
    onSelect,
    user: { id, fName, lName },
  } = props;
  const styles = {
    backgroundColor: isSelected ? 'rgba(0, 0, 0, 0.5)' : 'initial',
  };
  return (
    //<li className="styleListItem">
    //isSelected ? className="styleListItem" : className="styleList"
    <li style={styles}>
      <span>
        UserID: "{id}"; UserFullName:"{fName} {lName}";
      </span>
      <button onClick={onSelect}>Select</button>
    </li>
    //<input type="checkbox" />
  );
};
export default ListItem;
