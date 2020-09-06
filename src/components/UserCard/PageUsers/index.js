import React, { Component } from 'react';
import propTypes from 'prop-types';
import classNames from 'classNames';

class PageUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      idLoaded: false,
    };
  }
  load = () => {
      //setState - isLoaded, getUsers
  };
  componentDidMount(){
      this.load();
  };
  componentDidUpdate(prevProps, prevState){
      // if currentPage was changtd this.load();
  }
  render(){
      const { error, isLoaded, users } = this.state;
      return();
  }
}

PageUsers.propTypes = {};
export default PageUsers;
