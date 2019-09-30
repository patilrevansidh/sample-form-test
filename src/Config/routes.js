import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { LoginPage } from '../Views/Auth/Login';
import { SlideViews } from '../Views/App/Home';


export const Routes = () => <div className='app-container'>
  <Router>
    <Switch>
      <Route exact path='/' component={SlideViews} />
      <Route path='/login' component={LoginPage} />
    </Switch>
  </Router>
</div>;
