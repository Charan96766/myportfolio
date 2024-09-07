import React from 'react';
import "../About/AboutSection.css";

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <h2>Discover More About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>About Me</h3>
          <p>
            Hello! I'm Vajjala Sai Charan, a passionate developer specializing in front-end and back-end technologies, including HTML, CSS, JavaScript, React.js, Node.js, and MongoDB. I enjoy crafting seamless user experiences and building responsive web applications.
          </p>
          <p>
            I am always eager to learn new technologies and improve my skills. I believe in continuous learning and regularly participate in tech communities and coding challenges to stay updated with industry trends.
          </p>
          <p>
            In addition to my technical skills, I am a strong advocate for clean code and best practices. I enjoy collaborating with like-minded professionals to create innovative solutions.</p>
          <p>
            Let's connect and explore the world of technology together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
