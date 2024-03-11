// Navbar.jsx
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import './App.css'; // Import navbar styles if any

const Navbar = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="portfolio"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Portfolio
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={scrollToTop}
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
