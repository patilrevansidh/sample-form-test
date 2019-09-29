import React, { Component } from 'react';
import { LoginForm } from './loginForm';
import './login.scss'
export class LoginPage extends Component {
  
  handleLoginSuccess = () => this.props.history.push('/');
  
  render() {
    return (
      <LoginForm onLogin={this.handleLoginSuccess}/>
    );
  }
}
