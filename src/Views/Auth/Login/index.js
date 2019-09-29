import React, { Component } from 'react';
import { LoginForm } from './loginForm';
import './login.scss'
export class LoginPage extends Component {
  handleSubmit = () =>{
    
  }
  render() {
    return (
      <LoginForm onSubmit={this.handleSubmit}/>
    );
  }
}
