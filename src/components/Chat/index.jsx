import React, { useState, useEffect, useReducer } from 'react';
import propTypes from 'prop-types';
import reducer from './reducer';

const data = {
  users: [
    {
      id: 1,
      name: 'Tom Smith',
    },
    {
      id: 2,
      name: 'Ann Fox',
    },
  ],
  messages: [
    {
      userId: 1,
      body: 'some text 1',
    },
    {
      userId: 2,
      body: 'some text 2',
    },
    {
      userId: 1,
      body: 'some text 3',
    },
    {
      userId: 1,
      body: 'some text 4',
    },
    {
      userId: 2,
      body: 'some text 5',
    },
  ],
};

const getData = () => data;

/*
function Chat(props) {
  const [state, dispatch] = useReducer(reducer, {
    users: new Map(),
    messages: [],
  });
  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'GET_SUCCESS',
      data,
    });
  }, []);
  const { messages } = state;
  return (
    <ul>
      {messages.map((i, index) => (
        <li key={index}>{JSON.stringify(i)}</li>
      ))}
    </ul>
  );
}
*/

function Chat(props) {
  const [state, dispatch] = useReducer(reducer, {
    users: new Map(),
    messages: [],
  });
  const [newMsg, changeNewMsg] = useState('');
  const newMessage = () => {
    dispatch({
      type: 'NEW_MSG',
      message: {
        userId: 1,
        body: newMsg,
      },
    });
  };
  const handleChange = (event) => {
    changeNewMsg(event.target.value);
  };
  useEffect(() => {
    const data = getData();
    dispatch({
      type: 'RESPONSE',
      data,
    });
  }, []);
  const { messages } = state;
  return (
    <ul>
      {messages.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
      <input></input>
    </ul>
  );
}

export default Chat;
