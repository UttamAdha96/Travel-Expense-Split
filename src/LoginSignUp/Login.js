import React, {useState} from 'react'
import './LoginSignUp.css';
// import { useSearchParams } from 'react-router-dom';
// import {Link } from "react-router-dom";


const Login = ({ onClose, type }) => {
  
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });
  const [ signupDetails, setSignUpDetails] = useState({
    name:'',
    emailID: '',
    password1: '',
    password2: '',
  })

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };
  const handleSignup = (e) => {
    const {name, value} = e.target;
    setSignUpDetails({
      ...signupDetails,
      [name]: value,
    });
  };

  const handleloginSubmit = (e) => {
    e.preventDefault();
    alert("Data saved")
    document.querySelector(".close-button2").click()
    console.log(loginDetails);
  };
  const handlesignupSubmit = (e) => {
    e.preventDefault();
    alert("Sign Up Complete")
    document.querySelector(".close-button2").click()
    console.log(signupDetails)
  }



  const modalContent = type === 'login' ? (
    <div>
      <form onSubmit={handleloginSubmit}>
      <h2>Login Form</h2>
      <label>Username:</label>
      <input type="text" name="username" value={loginDetails.username} onChange={handleLogin} required />
          
      <label>password:</label>
      <input type="password"  name="password" value={loginDetails.password} onChange={handleLogin} required />
      <button type="submit">Sign Up</button> 
      </form>
    </div>
  ) : (
    <div>
      <form onSubmit={handlesignupSubmit}>
      <h2>Sign Up Form</h2>
      <label>Your Name:</label>
      <input type="text" name="name" value={signupDetails.name} onChange={handleSignup} required />
          
      <label>Email Id:</label>
      <input type="text" name="emailID" value={signupDetails.emailID} onChange={handleSignup} required />

      <label>Enter Password:</label>
      <input type="text" name="password1" value={signupDetails.password1} onChange={handleSignup} required />

      <label>Confirm Password:</label>
      <input type="text" name="password2" value={signupDetails.password2} onChange={handleSignup} required />
      <button type="submit">Sign Up</button> 
      </form>
    </div>
  );
  return (<>

<div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button2" onClick={onClose}>Close</button>
        {modalContent}
      </div>
    </div>
    
    
    </>
  )
}

export default Login