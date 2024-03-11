// Footer.jsx
import React from 'react';
import './App.css'; // Import footer styles

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          {/* GitHub */}
          <a href="https://github.com/Cscrivens" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/chanel-scrivens" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {/* Add more social links as needed */}
        </div>
        <div className="footer-info">
          <p>&copy; 2024 Your Name</p>
          <p>All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
