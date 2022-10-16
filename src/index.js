import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from './login';
import './style.css';
import axios from 'axios';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
