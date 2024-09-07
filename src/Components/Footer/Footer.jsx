import React, { useState, useEffect } from 'react';
import '../Footer/Footer.css';
import { FaArrowUp, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const [showArrow, setShowArrow] = useState(false);

  // Function to handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Show/hide arrow based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 300); // Show arrow when scroll exceeds 300px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          © 2024 Vajjala Sai Charan. Made with{' '}
          <FaHeart className="love-icon" /> All Rights Reserved.
        </p>
      </div>
      {showArrow && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp className="arrow-icon" />
        </div>
      )}
    </footer>
  );
};

export default Footer;
