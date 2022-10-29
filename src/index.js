import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import LoginPage from './login';
import './style.css';
import AuthLogin from './App.js'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
