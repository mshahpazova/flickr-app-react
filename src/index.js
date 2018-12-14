import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById('root'));