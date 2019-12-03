import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './Component/User';
import Card from './Component/Card';
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<User />, document.getElementById('user'));
ReactDOM.render(<Card />, document.getElementById('card'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
