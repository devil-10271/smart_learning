import React from 'react';
// import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <header>
      <div className="container header-content">
        <div className="logo">
          <i className="fas fa-graduation-cap"></i>
          The <span>AIGTE</span>
        </div>
        <nav>
          <ul>
            <div className='firdiv'>
            <li><a href="/">Home</a></li>
              
            <li><a href="/Programs">Programs</a></li>
            

            <li><a href="/About_us">About Us</a></li>
            </div>
            <div className='containerauth'>
            <li><a href="/Login">Login</a></li>
            <li><a href="/Signup">Sign Up</a></li>
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;