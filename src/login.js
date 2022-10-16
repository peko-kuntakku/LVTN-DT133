import React, { useState } from "react";
import ReactDOM from "react-dom";
import './style/login.css';
import Main from './main';

function LoginPage ()
{
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1@gmail.com",
      password: "pass1"
    },
    {
      username: "user1@gmail.com",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleClick = (event) => {
    event.preventDefault();
    let {tên, upass} = document.forms[0];
    
    const userData = database.find((user) => user.username === tên.value);
    if (userData) {
      if (userData.password !== upass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } 
    else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }

  }
  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div>{errorMessages.message}</div>
    );

  const renderform = (
        <body className="">
          <div className="signin-screen-left">
            <img
              src="/playground_assets/apartmentphoto114708-wo1q-900w.png"
              alt="apartmentphoto114708"
              className="signin-screen-photo"
            />
          </div>
          <div className="signin-screen-right">
            <form onSubmit={handleClick} className="signin-screen-login-form">
              <span className="signin-screen-title displaymdsemibold">Đăng nhập</span>
              <div className="signin-screen-input">
                <div className="signin-screen-email">
                  <span className="signin-subtitle textxlsemibold"> Email </span>
                  <input
                    type="email"
                    placeholder="Email"
                    className="signin-input"
                    name="tên" required 
                  />
                  {renderErrorMessage("uname")}
                </div>
                <div className="signin-screen-password">
                  <span className="signin-subtitle textxlsemibold"> Mật khẩu </span>
                  <input
                    type="password"
                    placeholder="Mật khẩu"
                    className="signin-input"
                    name="upass" required
                  />
                  {renderErrorMessage("upass")}
                </div>
              </div>
              <div className="signin-screen-buttongroup">
                <button type="submit" className="signin-screen-priimary-button">
                  <span className="signin-screen-text03 textmdsemibold">Đăng nhập</span>
                </button>
                <div className="signin-screen-or">
                  <span className="signin-screen-text10 textsm">Hoặc</span>
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
                  <span className="signin-screen-text12 textmdsemibold">Đăng nhập với Google</span>
                  <img
                    src="/playground_assets/googlei472-b5p.svg"
                    alt="googleI472"
                    className="signin-screen-google"
                  />
                </button>
              </div>
            </form>
          </div>
        </body>
    )
  return (
    <div>{isSubmitted ? <div><Main /></div> : renderform}</div>
  )
}

export default LoginPage