import "babel-polyfill";
require('es6-promise').polyfill();
require('isomorphic-fetch');
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { render } from 'react-dom';



import'./styles/style.scss';


ReactDOM.render((
    <App />
), document.getElementById('app'));

module.hot.accept();