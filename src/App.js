import React, { Component } from 'react';
//import Greeting from './components/Greeting';
import UserList from './components/UserList';
import SelectedUsers from './components/SelectedUsers/index';
import Timer from './components/Timer/index';
import Greeting from './components/Greeting';
import FormLogin from './components/FormLogin';
import Calendar from './components/Calendar';
import Carousel from './components/Carousel';
import { slidesCollection } from './components/Carousel/Config';

//const dbData = [];
const App = () => {
  return <Carousel width={800} height={400} slides={slidesCollection} />;
};
export default App;

/*
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: dbData.map((u) => ({ ...u, isSelected: false })),
    };
  }
  setUsers = (newUsers) => {
    this.setState({
      users: newUsers,
    });
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <UserList users={users} setUsers={this.setUsers} />
        <SelectedUsers users={users} />
      </>
    );
  }
}

export default App;
*/
/*
function App() {
  return <Greeting name={'Ivan!'} />;
}
*/
/*
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //userName: 'unknown',
      //isHelloMode: true,
      guests: [
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
      ],
    };
    this.sortSwitchUsers = false;
  }
  sortGuest = () => {
    const { guests } = this.state;
    const sortedUsers = JSON.parse(JSON.stringify(guests)).sort((a, b) => {
      if (a.fName > b.fName) {
        return this.sortSwitchUsers ? -1 : 1;
      }
      if (a.fName < b.fName) {
        return this.sortSwitchUsers ? 1 : -1;
      }
      return 0;
    });
    this.setState({
      guests: sortedUsers,
    });
    this.sortSwitchUsers = !this.sortSwitchUsers;
  };

  
  //changeMode = () => {
  //  const { isHelloMode } = this.state;
  //  this.setState({
  //    isHelloMode: !isHelloMode,
  //  });
  //};
  
  mapUsers = () =>
    this.state.guests.map(({ id, fName, lName }) => (
      <Greeting key={id} name={`${id} ${fName} ${lName}`} />
    ));
  render() {
    return (
      <>
        <button onClick={this.sortGuest}> Sort guests </button>
        <div>{this.mapUsers}</div>
      </>
    );
   
    //const { userName, isHelloMode } = this.state;
    //return (
    //  <>
    //    <button onClick={this.changeMode}>Mode</button>
    //    <Greeting name={userName} isHello={isHelloMode} />
    //  </>
    //);
    
  }
}
export default App;
*/
/*
import logo from './logo.svg';
import './App.css';
*/
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
/*
return React.createElement(
  'div',
  { className: 'App-header' },
  React.createElement(
    'header',
    {
      className: 'App-header',
    },
    React.createElement('img', {
      src: logo,
      className: 'App-header',
      alt: 'logo',
    }),
    React.createElement(
      'p',
      null,
      'Edit',
      React.createElement('code', null, 'src/App.js'),
      ' and save to reload.'
    ),
    React.createElement(
      'a',
      {
        className: 'App-link',
        href: 'https://reactjs.org',
        target: '_blank',
        rel: 'noopener noreferrer',
      },
      'Learn React'
    )
  )
);
export default App;
*/
