import React from 'react';
const Greeting = (props) => {
  const { name, isHello = true } = props;
  return (
    <div>
      {isHello ? 'Hello ' : 'Bye '} {name}
    </div>
  );
};
export default Greeting;
