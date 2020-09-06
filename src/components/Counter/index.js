import React, { useState, useEffect, useReducer } from 'react';
import propTypes from 'prop-types';

const initialState = { count: 0 };
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </div>
  );
}

/*
function Counter(prop) {
  const { step } = prop;
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleClick = () => {
      setCount((prevCountValue) => prevCountValue + step);
    };
    document.body.addEventListener('dblclick', handleClick);
    return () => {
      document.body.removeEventListener('dblclick', handleClick);
    };
  }, [step]);
  const funIncrement = () => {
    setCount(count + step);
  };
  const funDecrement = () => {
    setCount(count - step);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={funDecrement}>-</button>
      <button onClick={funIncrement}>+</button>
    </div>
  );
}*/
Counter.propTypes = {
  step: propTypes.number,
};
Counter.defaultProps = {
  step: 1,
};
export default Counter;
