import React from 'react';
import './Foot.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <h1>Your Name</h1>
          </div>
          <div className="footer-social">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2023 Your Name</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
