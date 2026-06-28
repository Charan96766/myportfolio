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
import AWS from "../assets/images/aws2.png";

import { 
  SiRedux, 
  SiTailwindcss, 
  SiMysql, 
  SiAmazondynamodb, 
  SiTypescript,
  SiMui
} from "react-icons/si";

const skillsData = [
  { name: "HTML", image: html, desc: "Expertise in semantic markup, SEO best practices, and accessible web standards." },
  { name: "CSS", image: css, desc: "Sleek responsive design, custom animations, transitions, and layout engines (Flex/Grid)." },
  { name: "JavaScript", image: javascript, desc: "Advanced ES6+, asynchronous programming, DOM manipulation, and modern practices." },
  { name: "TypeScript", icon: <SiTypescript size={60} color="#3178C6" />, desc: "Strong typing, interfaces, generic programming, and enterprise stability." },
  { name: "ReactJS", image: react, desc: "SPA development, component architecture, hooks, state management, and lifecycle hooks." },
  { name: "Redux / Toolkit", icon: <SiRedux size={60} color="#764ABC" />, desc: "Global state management, slices, Thunks, and scalable data stores." },
  { name: "Node.js", image: node, desc: "Event-driven backends, asynchronous performance, npm ecosystem, and microservices." },
  { name: "Express.js", image: express, desc: "REST API architectures, middleware design, routing, security, and performance tuning." },
  { name: "MongoDB", image: mongo, desc: "NoSQL schema modeling, aggregation queries, and high-performance indexing." },
  { name: "MySQL", icon: <SiMysql size={60} color="#4479A1" />, desc: "Relational database modeling, complex JOIN queries, schema migration, and transaction control." },
  { name: "DynamoDB", icon: <SiAmazondynamodb size={60} color="#4053EC" />, desc: "AWS Serverless NoSQL, partitioning, single-table design, and fast key-value lookups." },
  { name: "AWS Cloud", image: AWS, desc: "Serverless deployment (Lambda, SQS, SNS, SES, Cognito, S3, EC2) and infrastructure hosting." },
  { name: "Material UI", icon: <SiMui size={60} color="#007FFF" />, desc: "Component design systems, themed styling, and high-fidelity layouts." },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={60} color="#06B6D4" />, desc: "Utility-first design, fast prototyping, responsiveness, and consistent themes." },
  { name: "GIT / GitHub", image: git, desc: "Branching protocols, continuous integration, code reviews, and remote collaborations." },
];


const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-header">
        <span className="section-label">Tech Stack</span>
        <h2 className="skills-title">Tools I build with.</h2>
      </div>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div
            className={`skill-card reveal reveal-scale delay-${(index % 4) + 1}`}
            key={index}
          >
            <div className="skill-card-inner">
              <div className="skill-card-front">
                {skill.image ? (
                  <img src={skill.image} alt={skill.name} className="skill-image" />
                ) : (
                  <div className="skill-icon-container" style={{ marginBottom: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {skill.icon}
                  </div>
                )}
                <p className="skill-name">{skill.name}</p>
              </div>
              <div className="skill-card-back">
                <p className="skill-description">{skill.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
