import React, { Component } from 'react';
import styles from './Pagination.module.scss';
import propTypes from 'prop-types';
import api from './../api';
import config from './../config';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      idLoaded: false,
      currentPage: currentPage,
      setCurrentPage: setCurrentPage,
    };
  }

  render() {}
}

Pagination.propTypes = {};
export default Pagination;
