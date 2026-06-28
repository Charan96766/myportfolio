import React from "react";
import "./Experience.css";
import IMS from "../assets/images/company1.png";
import BRN from "../assets/images/brn infotech.png"; 
import VW from "../assets/images/voltuswave_logo.jpeg"
const experiences = [
  {
    role: "Software Engineer",
    company: "Voltuswave Technologies",
    duration: "Dec 2024 - Present",
    logo: VW,
    skills: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS (EC2, S3, Lambda, SQS, SNS, SES, Cognito, AppSync)",
      "Express.js",
      "Redux",
      "MySQL",
      "DynamoDB",
      "Tailwind CSS",
      "MUI"
    ],
    responsibilities: [
      "Amura (Oct 2025 - Present): Developed health & wellness frontend modules (React) and backend services (Node.js/Express), managed AWS DynamoDB schemas, and integrated EC2, S3, and Lambda for scalable coaching automation.",
      "QmentisAI (Mar 2025 - Sep 2025): Engineered AI-driven QA testing automation dashboard tools utilizing step functions, SQS, Lambda, and MySQL to accelerate script generation and defect logging.",
      "VoltusFreight (Dec 2024 - Feb 2025): Developed an adaptive drag-and-drop card designer, a React cargo scheduling timeline interface, Stripe payment integration, and AI-driven automated agent quotation systems."
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "IT Monks Solutions",
    duration: "Jan 2024 - Jun 2024",
    logo: IMS,
    skills: [
      "React",
      "Node.js",
      "JavaScript",
      "Redux Toolkit",
      "Express.js",
      "MongoDB",
      "HTML5",
      "CSS3",
      "Git & GitHub"
    ],
    responsibilities: [
      "Developed the company website from the ground up using React, Node.js, and MongoDB, integrating OTP verification for secure user registration.",
      "Crafted highly responsive and visually engaging user interfaces, ensuring seamless functionality across a variety of screen sizes.",
      "Handled database modeling and backend API design for stable and optimized data flow.",
      "Collaborated with project managers, design groups, and senior team members in an agile setup to deliver robust product features."
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "BRN Infotech",
    duration: "Jul 2023 - Dec 2023",
    logo: BRN,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Bootstrap",
      "ReactJS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git"
    ],
    responsibilities: [
      "Developed responsive web layouts focusing on cross-browser compatibility, web accessibility (WCAG), and responsive rendering.",
      "Translated high-fidelity Figma mockups into interactive frontend React code.",
      "Integrated third-party APIs and database integrations to display dynamic real-time data within applications.",
      "Leveraged Git for source control management, code reviews, and active branch collaboration."
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <span className="section-label reveal">Experience</span>
        <h2 className="experience-title reveal">Where I've shipped.</h2>
      </div>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item reveal ${index % 2 === 0 ? 'reveal-left' : 'reveal-right'}`}
          >
            <div className="timeline-content">
              <div className="company-logo">
                <img src={experience.logo} alt={`${experience.company} logo`} />
              </div>
              <div className="details">
                <h3 className="role">{experience.role}</h3>
                <h4 className="company">{experience.company}</h4>
                <p className="duration">{experience.duration}</p>
                <div className="responsibilities">
                  {experience.responsibilities.map((responsibility, i) => (
                    <p key={i} className="responsibility">
                      {responsibility}
                    </p>
                  ))}
                </div>
                <div className="skills">
                  {experience.skills.map((skill, i) => (
                    <span key={i} className="skill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="timeline-marker"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
