import React from 'react';
import Tilt from 'react-parallax-tilt';
import '../Projects/Project.css';

import Amura from "../assets/images/amura_health.jpg";
import QmentisAI from "../assets/images/qmentis_ai.jpg";
import VoltusFreight from "../assets/images/voltus_freight.jpg";
import IMS from "../assets/images/project1.png";

const projects = [
  {
    title: "Amura Health & Wellness Platform",
    description: [
      "Contributed to the development of a health and wellness application focusing on personalized nutrition, diagnostics, and remote coaching.",
      "Developed frontend modules with React.js/TypeScript and backend services with Node.js and Express.js for high-performing, secure data flow.",
      "Designed and managed AWS DynamoDB schemas while integrating EC2, S3, and Lambda for scalable deployment.",
      "Enhanced performance and security through optimized API design, caching, and infrastructure best practices."
    ],
    link: "",
    github: "",
    image: Amura,
    category: "Health-Tech",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Express", "Redux", "MUI", "DynamoDB"],
  },
  {
    title: "QmentisAI - QA Testing Automation",
    description: [
      "Accelerates intelligent test design, script generation, and defect documentation for business analysts and testers.",
      "Utilizes various AI models to enhance test efficiency, featuring adaptive scripts and self-healing capabilities.",
      "Automates routine testing tasks, seamlessly integrating into CI/CD pipelines, DevOps, and test management systems.",
      "Ensures end-to-end testing continuity, resulting in quicker and more effective software delivery."
    ],
    link: "",
    github: "",
    image: QmentisAI,
    category: "AI / QA Automation",
    technologies: ["React", "Node.js", "TypeScript", "AWS Lambda", "SQS", "Step Functions", "MySQL", "Express", "Redux", "Tailwind CSS"],
  },
  {
    title: "VoltusFreight - Cargo & Logistics System",
    description: [
      "Cargo tracking and management platform for commercial logistics, freight forwarders, and timely cargo delivery.",
      "Developed an adaptive card designer with drag-and-drop functionality for creating responsive integration cards.",
      "Worked on a React-based cargo scheduler for graphical visualization and tracking from initial pickup to final delivery.",
      "Integrated Stripe payment system and developed AI-driven email automation with WorldZone integration for vendor quotations."
    ],
    link: "",
    github: "",
    image: VoltusFreight,
    category: "Logistics",
    technologies: ["React", "Node.js", "TypeScript", "AWS Lambda", "SQS", "SES", "SNS", "MySQL", "Express", "Redux", "Tailwind CSS", "Stripe"],
  },
  {
    title: "IMS Company Website",
    description: [
      "Developed the IT Monks Solutions company website from the ground up, ensuring smooth functionality, responsive design, and active user engagement.",
      "Implemented OTP verification through email for user authentication to enhance application security.",
      "Leveraged MongoDB for data storage, Express.js for server operations, React.js for client-side rendering, and Node.js for backend logic."
    ],
    link: "https://www.itmonkssolutions.com/",
    github: "https://github.com/Charan96766/itmonkssolutions.git",
    image: IMS,
    category: "Web Platform",
    technologies: ["React", "Node.js", "JavaScript", "Redux Toolkit", "Express.js", "MongoDB", "CSS", "Git"],
  }
];

const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <span className="section-label">All Projects</span>
        <h2 className="projects-heading">Selected <span className="serif-accent">work.</span></h2>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt
            key={index}
            className="project-tilt"
            tiltMaxAngleX={6}
            tiltMaxAngleY={6}
            scale={1.02}
            transitionSpeed={1400}
            glareEnable={true}
            glareMaxOpacity={0.14}
            glareColor="#ff5c35"
            glarePosition="all"
            glareBorderRadius="10px"
          >
            <div className={`project-card reveal delay-${(index % 2) + 1}`}>
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <div className="project-content">
                <span className="project-index">
                  {String(index + 1).padStart(2, "0")} — {project.category}
                </span>
                <h3 className="project-title">{project.title}</h3>
                <ul className="project-description">
                  {project.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
                <div className="project-technologies">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Project;
