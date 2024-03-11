// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Navbar from './NavBar';
import Portfolio from './Portfolio';
import Slider from './Slider';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Navbar />
        <Slider/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Portfolio />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
