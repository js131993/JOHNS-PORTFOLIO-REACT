import React from 'react';
import Nav from '../Nav/Nav.jsx'
import '../Header/Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <h1>Your Name</h1>
          <Nav></Nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
