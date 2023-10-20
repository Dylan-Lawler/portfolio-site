import React from 'react';
import './App.css';
import './styles.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Resume from './Resume';
import AboutMe from './AboutMe';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="About"> 
              <Link to="/about">About Me</Link>
            </li>
            <li className="logo">Dylan Lawler</li>
            <li className="Resume"> 
              <Link to="/">Resume</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
