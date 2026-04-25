import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

const projects = [
  { name: 'E-Commerce Platform', tech: 'React · Node · MongoDB' },
  { name: 'RESTful API Service',  tech: 'Express · JWT · Mongoose' },
  { name: 'Auth System',          tech: 'Node · bcrypt · Sessions' },
  { name: 'Admin Dashboard',      tech: 'React · Chart.js · Tailwind' },
];

export default function ProjectsCard() {

  const navigation = useNavigate();
  return (
    <div
      className="card col-8"
      id="projects"
      onClick={() => navigation("/projects")}
    >
      <div className="card-tag">Projects</div>
      <h2>Selected Work</h2>

      <div className="proj-list">
        {projects.map((p) => (
          <div className="proj-item" key={p.name}>
            <span className="proj-name">{p.name}</span>
            <span className="proj-tech">{p.tech}</span>
          </div>
        ))}
      </div>

      <a href="#" className="card-link">
        All projects →
      </a>
    </div>
  );
}
