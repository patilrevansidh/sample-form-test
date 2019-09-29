import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage } from '../Views/Auth/Login';

export const Routes = () => <div className='app-container'>
  <Router>
    <Switch>
      <Route exact path='/login' component={LoginPage} />
      <App/>
    </Switch>
  </Router>
</div>;

const App = () => <Route path='/' >
  <Redirect to="/login" />
</Route>;