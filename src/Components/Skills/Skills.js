import React from "react";
import "./Skills.css"; 
import html from "../assets/images/html img.png";
import css from "../assets/images/css img.png";
import javascript from "../assets/images/javascript img.png";
import react from "../assets/images/react img.png";
import express from "../assets/images/express js img.png";
import mongo from "../assets/images/mongo db img.png";
import node from "../assets/images/node js img.png";
import git from "../assets/images/git img.png";

const skillsData = [
  { name: "HTML", image: html  },
  { name: "CSS", image: css  },
  { name: "JavaScript", image: javascript  },
  { name: "ReactJS", image: react },
  { name: "Node.js", image: node }, 
  { name: "Express.js", image: express },
  { name: "MongoDB", image: mongo }, 
  { name: "GIT", image: git  },
];


const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-card-inner">
              <div className="skill-card-front">
                <img src={skill.image} alt={skill.name} className="skill-image" />
                <p className="skill-name">{skill.name}</p>
              </div>
              <div className="skill-card-back">
                <p className="skill-description">Expert in {skill.name} with extensive experience in creating modern, responsive web applications.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
