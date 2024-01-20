import React, {useState} from 'react'
import './LoginSignUp.css';
import axios from 'axios';

// import { useSearchParams } from 'react-router-dom';
// import {Link } from "react-router-dom";


const Login = ({ onClose, type }) => {
  
  const [loginDetails, setLoginDetails] = useState({
    Email: '',
    password: '',
  });
  const [ signupDetails, setSignUpDetails] = useState({
    username:'',
    email: '',
    // password: '',
    // password2: '',
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

  const handleloginSubmit = async (e) => {
    e.preventDefault();
    alert("Data saved")
    document.querySelector(".close-button2").click()
    console.log(loginDetails);
    try {
      const response = await axios.post('http://127.0.0.1:8000/admin/auth/user/',loginDetails);
      localStorage.setItem('token', response.data.token);
      console.log('Authentication successful!');

      if (!response.ok) {
          throw new Error('Failed to Login.');
      }
  } catch (error) {
      console.error('Error in Login:', error.message);
  }
  };
  const handlesignupSubmit = async (e) => {
    e.preventDefault();
    alert("Sign Up Complete")
    document.querySelector(".close-button2").click()
    console.log(signupDetails)
    try {
      const response = await fetch('http://127.0.0.1:8000/api/users/register/', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(signupDetails),
      });

      if (!response.ok) {
          throw new Error('Failed to Register.');
      }
  } catch (error) {
      console.error('Error in register:', error.message);
  }
  }



  const modalContent = type === 'login' ? (
    <div>
      <form onSubmit={handleloginSubmit}>
      <h2>Login Form</h2>
      <label>Email ID:</label>
      <input type="text" name="Email" value={loginDetails.Email} onChange={handleLogin} required />
          
      <label>password:</label>
      <input type="password"  name="password" value={loginDetails.password} onChange={handleLogin} required />
      <button type="submit">Login</button> 
      </form>
    </div>
  ) : (
    <div>
      <form onSubmit={handlesignupSubmit}>
      <h2>Sign Up Form</h2>
      <label>Your Name:</label>
      <input type="text" name="username" value={signupDetails.username} onChange={handleSignup} required />
          
      <label>Email Id:</label>
      <input type="text" name="email" value={signupDetails.email} onChange={handleSignup} required />

      {/* <label>Enter Password:</label>
      <input type="password" name="password" value={signupDetails.password} onChange={handleSignup} required /> */}

      {/* <label>Confirm Password:</label>
      <input type="password" name="password2" value={signupDetails.password2} onChange={handleSignup} required /> */}
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