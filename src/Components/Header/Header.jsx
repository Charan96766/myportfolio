import React from 'react';
import '../Header/Header.css';
import headerImage from '../assets/images/sai charan.png';  

import { FaInstagramSquare } from "react-icons/fa"; 
import { FaFacebookSquare } from "react-icons/fa"; 
import { FaLinkedin } from "react-icons/fa"; 
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="intro-section">
          <h1>Welcome! I’m Vajjala Sai Charan</h1>
          <p>
            A full-stack developer with a passion for crafting beautiful and functional web applications. I specialize in HTML, CSS, JavaScript, ReactJS, ExpressJS, and Node.js, aiming to build seamless user experiences that bridge the gap between functionality and aesthetics.
          </p>
          <p className="personal-message">
            "Empowering the web, one line of code at a time."
          </p> 
          <p className="location">
            <strong>Location:</strong> <span>Hyderabad, India</span>
          </p>
          <p className="availability">Currently available for exciting new projects!</p>
          <div className="social-links"> 
            <a href="https://www.instagram.com/mr_energious/" target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare className="social-icon instagram-icon" />
            </a>            
            <a href="https://www.facebook.com/charan.s.vajjala/" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare className="social-icon facebook-icon" />
            </a> 
            <a href="https://www.linkedin.com/in/vajjalasaicharan/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="social-icon linkedin-icon" />
            </a> 
            <a href="https://github.com/Charan96766" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare className="social-icon github-icon" />
            </a>
          </div>
          <a href="https://drive.google.com/uc?export=download&id=1omoSkDG4r_Bc7FUvEhCNWM2YjLpIWsgP" download className="download-resume-btn">
            Download Resume
          </a>
        </div>
        <div className="header-image-container">
          <img src={headerImage} alt="Vajjala Sai Charan" className="header-image" />
        </div>
      </div>
    </header>
  );
};

export default Header;
