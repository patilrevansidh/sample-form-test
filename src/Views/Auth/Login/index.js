import React, { Component } from 'react';
import { LoginForm } from './loginForm';
import './login.scss';
import { connect } from 'react-redux';
import { setProfileStatus } from '../../../Actions/Slide';

const Login = (props) => {
  const handleLoginSuccess = () => {
    props.setProfileStatus()
    props.history.push('/');
  };

  // render() {
  return (
    <LoginForm onLogin={handleLoginSuccess} />
  );
  // }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    setProfileStatus: () => dispatchEvent(setProfileStatus())
  }
}
export const LoginPage = connect(null, mapDispatchToProps)(Login)