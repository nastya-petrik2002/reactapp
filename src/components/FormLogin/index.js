import React, { Component } from 'react';
import styles from './FormLogin.module.css';

class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
      isPasswordValid: null,
    };
  }
  handleEmailChange = (event) => {
    this.setState({
      userEmail: event.target.value,
    });
  };
  handlePasswordChange = (event) => {
    this.setState({
      userPassword: event.target.value,
    });
  };
  /*  handleCommonChange = ({target:{name, value}}) => {
      this.setState({[name]:value});
  };*/
  handleSubmit = (e) => {
    e.preventDefault();
  };
  render() {
    const { userEmail, userPassword, isPasswordValid } = this.state;
    const passStyleClass = `${styles.input} ${
      isPasswordValid && styles.inputValid
    }`;
    return (
      <form onSubmit={this.handleSubmit} className={styles.container}>
        <input
          className={styles.inputstyle}
          type="email"
          name="userEmail"
          value={userEmail}
          onChange={this.handleEmailChange}
          placeholder="Enter email"
        />
        <input
          className={passStyleClass}
          type="password"
          name="userPassword"
          value={userPassword}
          onChange={this.handlePasswordChange}
          placeholder="Enter password"
        />
        <button type="submit"> LOGIN </button>
      </form>
    );
  }
}
export default FormLogin;
