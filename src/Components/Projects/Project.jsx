import React from 'react';
import '../Projects/Project.css';
import { PiLinkSimpleBold } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";  // Importing GitHub icon
// import profilePhoto from '../assets/images/Profile.png'; 
import IMS from "../assets/images/project1.png";
import Downy from "../assets/images/project2.png";
import Pulse from "../assets/images/project3.png"; 
import Weather from "../assets/images/weataher.png";
const projects = [
  {
    title: "IMS Company Website",
    description: [
      "Developed the IT Monks Solutions company website with responsiveness and user-friendliness, utilizing the MERN stack to ensure seamless functionality across devices.",
      "Implemented OTP verification through email to enhance security measures and user authentication.",
      "Leveraged MongoDB for robust data storage, Express.js for efficient server-side operations, React.js for dynamic client-side rendering, and Node.js for scalable backend development.",
      "Collaborated closely with design and backend teams to integrate features and optimize user experience.",
      "Conducted thorough testing and debugging to maintain high-quality code standards.",
    ],
    link: "https://www.itmonkssolutions.com/",
    github: "https://github.com/Charan96766/itmonkssolutions.git",  // Add GitHub URL
    image: IMS,
    technologies: ["HTML","CSS","JavaScript", "React.js", "Express.js","Node.js","MongoDB","Github"],
  },
  {
    title: "Downy Bail Bonds Website",
    description: [
      "The Downey Bail Bonds website utilizes the MERN stack, including MongoDB, Express.js, React.js, and Node.js, to build a powerful and versatile platform.",
      "The website streamlines the bail bond process with clear and intuitive navigation, making it straightforward for users to access and manage services.",
      "Users benefit from real-time updates that keep them informed about the latest developments and information",
      "By prioritizing efficiency and effectiveness, the website delivers a seamless experience tailored to meet clients' needs."
    ],
    link: "",
    github: "https://github.com/Charan96766/downybailbonds.git",  // Add GitHub URL
    image: Downy,
    technologies: ["HTML","CSS","JavaScript", "React.js", "Express.js","Node.js","MongoDB","Github"],
  }, 
  {
    title: "Pulse Web Application",
    description: [
      "Developed core functionality for user accounts, including login, signup, update, and delete features, integrated with a database.",
      "Designed and implemented a new interface to enhance user interaction and experience.",
      "Enabled users to manage their accounts by allowing them to log in, sign up, update, and delete their profiles, similar to other web applications.",
      "Conducted requirement analysis and participated in the full development lifecycle, including design, coding, testing, maintenance, and deployment of the web portal.",
      "Ensured the web application is user-friendly and accessible, providing a seamless experience for users.",
    ],
    link: "", 
    github: "https://github.com/Charan96766/pulsewebapplication.git",  
    image: Pulse,
    technologies: ["HTML","CSS","JavaScript", "React.js", "Express.js","Node.js","MongoDB","Github"],
  }, 
  {
    title: "WeatherFinder",
    description: [
      "Developed WeatherFetch, a Node.js and EJS-based service.",
      "Implemented functionality for users to enter their desired location and retrieve weather data.",
      "Integrated the Weatherstack API to fetch real-time weather information based on user input.",
      "Displayed weather data using EJS (Embedded JavaScript) templates, without additional frontend technologies.",
    ],
    link: "https://adaptnxtassignmentsaicharan.onrender.com/", 
    github: "https://github.com/Charan96766/adaptnxtassignmentsaicharan.git",  
    image: Weather,
    technologies: ["HTML","CSS","JavaScript", "React.js", "Express.js","Node.js","MongoDB","EJS","Github"],
  }, 
  
  
  
  

];





const Project = () => {
  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
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
              <div className={`project-links ${project.link === "" && project.github ? 'project-links-center' : ''}`}>
                {project.link && (
                  <a href={project.link} className="project-link">
                    View Project <PiLinkSimpleBold />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} className="project-link github-link">
                    View on GitHub <FaGithub />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
