import React, { useState, useEffect } from 'react';
import "../Navbar/Navbar.css";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const NavbarComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
    document.body.classList.toggle('dark-mode', !isDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  // Shrink/solidify navbar on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in view (scroll spy)
  useEffect(() => {
    const sections = NAV_ITEMS
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavItemClick = () => setIsOpen(false);

  return (
    <nav className={`navbar ${isDarkMode ? 'dark' : 'light'} ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home" aria-label="Home" className="navbar-brand">
            <span className="brand-mark">
              <span className="brand-initials">SC</span>
            </span>
            <span className="brand-text">
              Sai<span className="brand-accent">Charan</span>
            </span>
          </a>
        </div>
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          {isOpen && (
            <div className="navbar-close" onClick={toggleMenu}>
              <FaTimes />
            </div>
          )}
          {NAV_ITEMS.map((item) => (
            <li key={item.id} onClick={handleNavItemClick}>
              <a
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active-link' : ''}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-icons">
          <a href="#contact" className="navbar-cta" onClick={handleNavItemClick}>
            <span className="cta-text">Hire Me</span>
          </a>
          <div className="navbar-theme-toggle">
            <button onClick={toggleTheme} aria-label="Toggle theme">
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
