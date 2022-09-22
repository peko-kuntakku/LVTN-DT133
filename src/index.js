import React, { useState } from "react";
import ReactDOM from "react-dom";
import {  Link } from "react-router-dom";

import './style.css';
import './style2.css';

import LoginP from './main/login';
import Main from './main/main';

class Game extends React.Component{
  render(){
  return (
    <div>
      <LoginP />
    </div>
    );
  };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
