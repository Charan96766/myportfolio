import React, { useState, useEffect } from 'react';
import "../Navbar/Navbar.css";
import LOGO from '../assets/images/logo main.png';
import { MdLightMode, MdDarkMode } from "react-icons/md"; 
import { FaBars, FaTimes } from "react-icons/fa"; 

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const handleNavItemClick = () => {
    setIsOpen(false); // Close the menu
  };

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">
            <img src={LOGO} alt="Logo" className="logo" />
          </a>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li onClick={handleNavItemClick}><a href="#about">About</a></li>
          <li onClick={handleNavItemClick}><a href="#experience">Experience</a></li>
          <li onClick={handleNavItemClick}><a href="#projects">Projects</a></li>
          <li onClick={handleNavItemClick}><a href="#skills">Skills</a></li>
          <li onClick={handleNavItemClick}><a href="#contact">Contact</a></li>
          
          {isOpen && (
            <div className="navbar-close" onClick={toggleMenu}>
              <FaTimes />
            </div>
          )}
        </ul>
        
        <div className="navbar-icons">
          <div className="navbar-theme-toggle">
            <button onClick={toggleTheme}>
              {isDarkMode ? <MdDarkMode /> : <MdLightMode />}
            </button>
          </div>
          <div 
            className="navbar-toggle" 
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
