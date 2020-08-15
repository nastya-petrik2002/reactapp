import React from 'react';
//import './UserListStyle.css';
const ListItem = (props) => {
  const {
    isSelected,
    onSelect,
    user: { id, fName, lName },
  } = props;
  const styles = {
    bgColor: 'rgb(0, 0, 255)',
  };
  return (
    //<li className="styleListItem">
    //isSelected ? className="styleListItem" : className="styleList"
    <li style={styles}>
      <span>
        UserID: "{id}"; UserFullName:"{fName} {lName}";
      </span>
      <button onClick={onSelect}>Select</button>
      <input type="checkbox" />
    </li>
  );
};
export default ListItem;
