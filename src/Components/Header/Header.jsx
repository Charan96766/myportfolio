import React, { useState, useEffect } from 'react';
import '../Header/Header.css';

import { FaArrowDown, FaArrowRight } from "react-icons/fa";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import CountUp from "../CountUp";

const ROLES = [
  "Software Engineer",
  "Full Stack Developer",
  "MERN Stack Specialist",
  "AWS Cloud Developer",
];

const STATS = [
  { target: 2, suffix: "+", label: "Years Exp" },
  { target: 10, suffix: "+", label: "Projects" },
  { target: 15, suffix: "+", label: "Skills" },
  { target: 3, suffix: "", label: "Companies" },
];

const Header = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), 90);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), 45);
    } else {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, roleIndex]);

  return (
    <header className="header" id="home">
      <div className="hero-inner">
        <span className="hero-badge">
          <span className="badge-dot"></span>
          AVAILABLE FOR OPPORTUNITIES
        </span>

        <h1 className="hero-name">
          <span className="hero-name-top">VAJJALA SAI</span>
          <span className="hero-name-accent">CHARAN.</span>
        </h1>

        <p className="hero-role">
          <span className="role-dash"></span>
          <span className="serif-accent">{display}</span>
          <span className="hero-cursor">|</span>
        </p>

        <p className="hero-desc">
          Software Engineer with 2+ years building and optimizing scalable web
          applications — from health-tech platforms to AI-driven QA automation.
          MERN + AWS specialist with a craft for clean, high-performing code.
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            View Work <FaArrowDown />
          </a>
          <a href="#contact" className="btn-outline">
            Let's Talk <FaArrowRight />
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            View Resume
          </a>
        </div>

        <div className="hero-stats">
          {STATS.map((stat, i) => (
            <div className="hero-stat" key={i}>
              <CountUp
                className="hero-stat-value"
                target={stat.target}
                suffix={stat.suffix}
              />
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="hero-socials">
          <a href="https://www.linkedin.com/in/vajjalasaicharan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Charan96766" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/mr_energious/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/charan.s.vajjala/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookF />
          </a>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
        <span className="scroll-text">Scroll</span>
      </a>
    </header>
  );
};

export default Header;
