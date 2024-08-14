import React, { useRef,useState } from 'react'

import "./Homepage.css"
const Homepage =() => {

  const userName=useRef("");
  const password=useRef("");
  const email=useRef("");
  const [check,setCheck]=useState({
    passwordVisibility : 'password',
    register : 'Register Here!',
    logButton:'Login',
    have : "Don't",
    emailDisplay : false
  })
  const [user,setUser]=useState([]);

  const onhandleSubmit=(e)=>{
    e.preventDefault();
    
    console.log(userName.current.value);
    console.log(password.current.value);
    setUser((current) => [...current,
      {
        name : userName.current.value,
        password : password.current.value
      }])
    console.log("New things");
    console.log(user);
  }

  const registerCall=()=>{
     setCheck((prev) => ({ ...prev,
      emailDisplay: !prev.emailDisplay ,
      register : prev.register==="Log in" ? 'Register Here!' : "Log in",
      logButton : prev.logButton==="Login" ? "Register" : "Login",
      have : prev.have==="Don't" ? "Already" :"Don't"
     }))
  }
    return(
      <div className= "homepage">
        <div className='left'></div>
        <div className='right'>
          <div className="wrapper">
          <h1>Login page</h1>
          <form onSubmit={onhandleSubmit} action="">
            <label >User name</label>
            <input type="text" id="userName" placeholder="Enter your name" ref={userName} required />
            {check.emailDisplay 
            && <div className="email"><label >Email</label>
            <input type="email" id="email" placeholder="Enter your email" ref={email} required />
            </div> }
            
            <label >Password</label>
            <input type={check.passwordVisibility} id="password" placeholder="Enter your password" ref={password} required/>
            <button id='submit'>{check.logButton}</button>
            <div className="register">{check.have} have an account?&nbsp;  
              <span
                href=""
                onClick={registerCall}
              >
                {check.register}
              </span></div>
          </form>
          </div>
          </div>
      </div>
    );
  }
export default Homepage ;
