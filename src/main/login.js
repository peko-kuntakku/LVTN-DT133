import React, { useState } from "react";
import ReactDOM from "react-dom";
import './login.css';
import Main from './main';

class LoginPage extends React.Component
{
  constructor(props) {
    super(props);
    this.state = {
        x: 0
    };
  }

  handleClick(){

    this.setState({x:1})
  }
  render(){
    if (this.state.x==0)
    return (
    <div className="signin-screen-container">
      <div className="signin-screen-signin-screen">
        <div className="signin-screen-image">
          <img
            src="/playground_assets/apartmentphoto114708-wo1q-900w.png"
            alt="apartmentphoto114708"
            className="signin-screen-apartmentphoto11"
          />
        </div>
        <div className="signin-screen-form">
          <div className="signin-screen-login-form">
            <div className="signin-screen-input">
              <div className="signin-screen-email">
                <input
                  type="email"
                  placeholder="Email"
                  className="signin-screen-input1"
                  name="uname" required 
                />
                <span className="signin-screen-text textxlsemibold"> Email </span>
              </div>
              <div className="signin-screen-password">
                <input
                  type="password"
                  placeholder="Mật khẩu"
                  className="signin-screen-input2"
                  name="upass" required
                />
                <span className="signin-screen-text01 textxlsemibold"> Mật khẩu </span>
              </div>
            </div>
            <div className="signin-screen-buttongroup">
              <div className="signin-screen-priimary-button" onClick={()=>this.handleClick()}>
                <span className="signin-screen-text03 textmdsemibold">
                    <span>Đăng nhập</span>
                </span>
              </div>
              <div className="signin-screen-or">
                <span className="signin-screen-text10 textsm">
                  <span>Hoặc</span>
                </span>
                <img
                  src="/playground_assets/line104723-ivbt.svg"
                  alt="Line104723"
                  className="signin-screen-line10"
                />
                <img
                  src="/playground_assets/line114724-ums.svg"
                  alt="Line114724"
                  className="signin-screen-line11"
                />
              </div>
              <button className="signin-screen-buttonwith-google">
                <span className="signin-screen-text12 textmdsemibold">
                  <span>Đăng nhập với Google</span>
                </span>
                <img
                  src="/playground_assets/googlei472-b5p.svg"
                  alt="googleI472"
                  className="signin-screen-google"
                />
              </button>
            </div>
            <span className="signin-screen-text14 displaymdsemibold">
              <span>Đăng nhập</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    )
    else return(<Main />)
  }
}

const LoginP = (props) =>  {
  return (
    <LoginPage />
  )
}


export default LoginP