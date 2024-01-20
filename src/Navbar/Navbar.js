import React, {useState} from 'react'
import './Navbar.css'
import {Link } from "react-router-dom";
import Login from '../LoginSignUp/Login';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');

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

      <div className='side-nav'> 
      <ul>
          <li onClick={() => openModal('login')}>LOG IN</li>
          <li onClick={() => openModal('signup')}>SIGN UP</li>
        </ul>
      </div>
      <div id='log-out' className='side-nav'> 
      <ul>
          <li onClick={() => openModal('login')}>LOG Out</li>
      </ul>
      </div>
    </div>
    {showModal&&<Login onClose={closeModal} type={modalType}/>}
    </div>
    </>
  )
}

export default Navbar
