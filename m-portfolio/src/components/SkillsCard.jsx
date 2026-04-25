import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';
const skills = [
  'React.js', 'Node.js', 'Express.js', 'MongoDB',
  'JavaScript', 'TypeScript', 'REST APIs', 'Git & GitHub',
  'Tailwind CSS', 'HTML & CSS',
];

export default function SkillsCard() {

  const navigation = useNavigate();
  return (
    <div
      className="card col-4"
      id="skills"
      onClick={() => navigation("/skills")}
    >
      <div className="card-tag">Skills</div>
      <h2>Tech Stack</h2>

      <div className="skills-wrap">
        {skills.map((skill) => (
          <div className="skill-chip" key={skill}>
            <span className="skill-dot" />
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}
