import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './Common/Styles/app.scss';
import { Routes } from './Config/routes';
import { store } from './Config/store';
import * as serviceWorker from './serviceWorker';

const App = () => <Provider store={store}>
  <Routes />
</Provider>

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
