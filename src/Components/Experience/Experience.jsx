import React from 'react';
import './Experience.css';
import IMS from "../assets/images/company1.png"; 
import BRN from "../assets/images/brn infotech.png";
const experiences = [
  {
    role: "Junior Software Engineer",
    company: "It Monks Solutions Pvt Ltd.",
    duration: "Jan 2024 - July 2024",
    logo: IMS,
    skills: ["HTML","CSS","JAVASCRIPT", "Bootstrap", "ReactJS", "Node.js", "Express.is", "MongoDB","Github"],
    responsibilities: [ 
      "Developed responsive and user-friendly web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js), alongside HTML5, CSS3, and JavaScript",
      "Collaborated with design and backend teams to implement features and lenhance user experience within the MERN architecture",
      "Participated in code reviews and contributed to improving code quality.",
      "Engaged closely with clients to grasp requirements thoroughly and deliver effective solutions leveraging the MERN stack technologies.",
      "Contributed significantly to the continuous improvement of development pocesses and best practices within the MERN stack development tea."
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "BRN Infotech Pvt Ltd",
    duration: "July 2023 - Dec 2023",
    logo: BRN,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap","ReactJS", "Node.js", "Express.js", "MongoDB","Github"],
    responsibilities: [ 
      "Developed responsive web pages with a focus on enhancing user experience and accessibility across all devices and screen sizes.",
      "Worked closely with designers to translate designs into functional web pages.",
      "Optimized website performance and ensured cross-browser compatibility.", 
      "Worked on integrating third-party APIs and services, enhancing website functionality and user experience with real-time data and external resources.",
      "Utilized version control systems like Git to collaborate effectively with team members, track changes, and maintain project history."
    ],
  },
  
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
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
                    <p key={i} className="responsibility">{responsibility}</p>
                  ))}
                </div>
                <div className="skills">
                  {experience.skills.map((skill, i) => (
                    <span key={i} className="skill">{skill}</span>
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
