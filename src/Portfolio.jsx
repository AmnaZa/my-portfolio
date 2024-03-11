// Portfolio.jsx
import React from 'react';
import './App.css'; // Import portfolio styles if any

const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="project">
        <h2>Project 1</h2>
        <div className="project-links">
          <a href="https://infinite-depths-65606-d9aa1a1e89cd.herokuapp.com/">View Project</a>
          <a href="https://github.com/AndrewCMonson/kursties-kookies.git">GitHub</a>
        </div>
      </div>
      {/* Add more projects as needed */}
    </div>
  );
};

export default Portfolio;
