import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

const experiences = [
  { role: 'MERN Stack Diploma',      where: 'Professional Certification — 2024' },
  { role: 'Faculty of Engineering',  where: 'Alexandria University — Currently enrolled' },
  { role: 'Freelance Web Developer', where: 'Full-stack projects — Ongoing' },
];

export default function ExperienceCard() {

  const navigation = useNavigate();
  return (
    <div
      className="card col-6"
      id="experience"
      onClick={() => navigation("/experience")}
    >
      <div className="card-tag">Experience</div>
      <h2>Background</h2>

      {experiences.map((exp) => (
        <div className="exp-item" key={exp.role}>
          <div className="exp-role">{exp.role}</div>
          <div className="exp-where">{exp.where}</div>
        </div>
      ))}
    </div>
  );
}
