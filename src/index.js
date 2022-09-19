import React, { useState } from "react";
import ReactDOM from "react-dom";
import './style.css';
import './style2.css';

import LoginPage from './login/login.js';
import Main from './main/main';

const App = () => {
  return (
    <Main />
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
