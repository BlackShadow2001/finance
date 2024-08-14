import React, { useRef, useState } from "react";
import "./Loginpage.css";
import { useSelector } from "react-redux";

const LoginPage = (props) => {
  
  /**
   * Assigning input values
   */
  const userName = useRef("");
  const password = useRef("");
  const email = useRef("");
/**
 * condition check values
 */
  const [check, setCheck] = useState({
    passwordVisibility: "password",
    iconchange:'fa-sharp fa-solid fa-eye',
    register: "Register Here!",
    logButton: "Login",
    have: "Don't",
    emailDisplay: false,
  });
  /**
   * User values
   */
  const [user, setUser] = useState([]);

  /**
   * On click of submit the form
   * @param {*} e 
   */
  const onhandleSubmit = (e) => {
    e.preventDefault();

    console.log(userName.current.value);
    console.log(password.current.value);
    setUser((current) => [
      ...current,
      {
        name: userName.current.value,
        password: password.current.value,
      },
    ]);
    console.log("New things");
    console.log(user);
  };

  /**
   * Register the user
   */
  const registerCall = () => {
    setCheck((prev) => ({
      ...prev,
      emailDisplay: !prev.emailDisplay,
      register: prev.register === "Log in" ? "Register Here!" : "Log in",
      logButton: prev.logButton === "Login" ? "Register" : "Login",
      have: prev.have === "Don't" ? "Already" : "Don't",
    }));
  };

  const iconchange=()=>{
    setCheck((prev) => ({
      ...prev,
      passwordVisibility : prev.passwordVisibility === 'password' ? 'text' : 'password',
      iconchange : prev.iconchange === 'fa-sharp fa-solid fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-sharp fa-solid fa-eye'
    }))
  }
  return (
    <div className="loginpage">
      <div className="left"></div>
      <div className="right">
        <div className="wrapper">
          <h1>Login page</h1>
          <form onSubmit={onhandleSubmit} action="">
            <label>User name</label>
            <input
              type="text"
              id="userName"
              placeholder="Enter your name"
              ref={userName}
              required
            />
            {check.emailDisplay && (
              <div className="email">
                <label>Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  ref={email}
                  required
                />
              </div>
            )}

            <label>Password</label>
            <div className="password">
              <input
                type={check.passwordVisibility}
                id="password"
                placeholder="Enter your password"
                ref={password}
                required
              />
              <i className= {`icon ${check.iconchange}`} onClick={iconchange}></i>
            </div>
            <button id="submit">{check.logButton}</button>
            <div className="register">
              {check.have} have an account?&nbsp;
              <span href="" onClick={registerCall}>
                {check.register}
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;
