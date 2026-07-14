import React from 'react';
import "../About/AboutSection.css";
import profile from "../assets/images/sai charan.png";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <span className="section-label reveal">About Me</span>

      <div className="about-content">
        <div className="about-photo reveal reveal-left">
          <div className="about-photo-frame">
            <img src={profile} alt="Vajjala Sai Charan" />
          </div>
        </div>

        <div className="about-text reveal reveal-right">
          <h2 className="about-heading">
            Turning complex problems into{" "}
            <span className="serif-accent">elegant</span> software.
          </h2>
          <p>
            I'm a Software Engineer with <strong>2+ years of experience</strong>{" "}
            building and optimizing scalable web applications across the full
            stack — HTML, CSS, JavaScript, React.js, Redux, Node.js, Express,
            MongoDB, MySQL, and AWS.
          </p>
          <p>
            From designing DynamoDB schemas and serverless AWS workflows to
            architecting AI-driven automation and real-time interfaces, I focus
            on clean, high-performing code and reliable backend services that
            ship.
          </p>
          <p>
            Committed to continuous learning, I thrive in agile, cross-functional
            teams — and I love turning ambiguous ideas into polished products.
          </p>
        </div>
      </div>

      <div className="about-details">
        <div className="about-detail-card education-card glow-card reveal delay-1">
          <h3>Education</h3>
          <div className="detail-item">
            <h4>B.Tech in Dairy Technology</h4>
            <p className="detail-place">College of Dairy Technology, Kamareddy</p>
            <p className="detail-meta">GPA: 8.13 | 2019 — 2023</p>
          </div>
          <div className="detail-item">
            <h4>Intermediate (MPC)</h4>
            <p className="detail-place">Narayana Junior College, Hyderabad</p>
            <p className="detail-meta">GPA: 9.76 | 2017 — 2019</p>
          </div>
        </div>

        <div className="about-detail-card certifications-card glow-card reveal delay-2">
          <h3>Certifications</h3>
          <ul className="cert-list">
            <li>Full Stack Web Development — BRN Infotech</li>
            <li>Trust and Security with Google Cloud — Google</li>
            <li>Claude Code in Action — Anthropic</li>
            <li>Claude 101 — Anthropic</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
