import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../assets/logo.jpg';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='d-flex align-items-center justify-content-between'>
      <div className="navbar m-auto d-flex justify-content-between align-items-center position-relative">
        <div className="logo"><img src={logo} alt="logo" /></div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="nav-link">
            <ul className='d-flex align-items-center'>
              <li className='list-unstyled '><a href="#">About Us</a></li>
              <li><a className='text-decoration-none' href="#">Features</a></li>
              <li><a href="#">More Options</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="nav-button d-flex">
            <div className="nav-log-in"><button>Login</button></div>
            <div className="nav-sign-up"><button>Sign up</button></div>
          </div>
        </div>

        <div className="hamburger flex-column" onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
