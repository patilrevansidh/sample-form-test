import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setProfileStatus } from '../../../Actions/Slide';
import './login.scss';
import { LoginForm } from './loginForm';

const Login = (props) => {
  const handleLoginSuccess = () => {
    props.setProfileStatus()
    props.history.push('/');
  };
  if (props.isLoggedIn) {
    return <Redirect to='/' />
  }
  return (
    <LoginForm onLogin={handleLoginSuccess} />
  );
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.isLoggedIn,
  }
}

const mapDispatchToProps = dispatchEvent => {
  return {
    setProfileStatus: () => dispatchEvent(setProfileStatus())
  }
}
export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login)