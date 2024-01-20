import React, {useState} from 'react'
import './Navbar.css'
import {Link } from "react-router-dom";
import Login from '../LoginSignUp/Login';
import axios from 'axios';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [modalType, setModalType] = useState('');

  

  const handleLogout = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/admin/auth/user/');
  
      if (response.ok) {
        setLoggedIn(false);
      } else {
        // Handle logout error
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  const openModal = (type) => {
    setModalType(type);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType('');
  };
  return (
    <>
    <div>
    <div className='navbar'>
      <div className='logo'>
        <Link to='/'><h3>IM-Split</h3></Link>
      </div>
{isLoggedIn? (
  <div id='log-out' className='side-nav'> 
      <ul>
          <li onClick={handleLogout}>LOG Out</li>
      </ul>
      </div>
):(
  <div className='side-nav'> 
      <ul>
          <li onClick={() => openModal('login')}>LOG IN</li>
          <li onClick={() => openModal('signup')}>SIGN UP</li>
        </ul>
      </div>
)}
      

      
    </div>
    {showModal&&<Login onClose={closeModal} type={modalType}/>}
    </div>
    </>
  )
}

export default Navbar
