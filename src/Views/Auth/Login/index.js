import React from 'react';
import { connect } from 'react-redux';
import { setProfileStatus } from '../../../Actions/Slide';
import './login.scss';
import { LoginForm } from './loginForm';

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