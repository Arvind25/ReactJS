import React, { Component } from 'react';
import logo from './images/logo.svg';
import './Header.css';
//import TimeDisplay from './TimeDisplay.jsx';
class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <div className="header-logo">
          <img src={logo} className="header-logo" alt="logo" />
        </div>    
        <div className="nav-wrapper">
          <nav>
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Services</a>
              <a href="#">Contact Us</a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
