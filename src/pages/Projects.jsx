import React, { useState, useEffect } from "react";
import "./Projects.css";
import { projects } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "fullstack", label: "Full-Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "HTML/CSS/Javascript", label: "HTML/CSS/Javascript" },
    { id: "C", label: "C" },
    { id: "python", label: "Python" },
    { id: "java", label: "Java" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openProject = (id) => {
    navigate(`/projects/${id}`);
  };

  const ProjectCard = ({ project }) => (
    <article
      className="mag-card"
      onClick={() => openProject(project.id)}
      style={{ cursor: "pointer" }}
    >
      {/* IMAGE SECTION */}
      <div className="mag-image">
        <img src={project.images?.[0] || project.image} alt={project.title} />

        <div className="mag-overlay">
          <span className="mag-category">{project.category}</span>
          <span className="mag-year">{project.year}</span>
        </div>

        <div className="mag-number">{project.num}</div>
      </div>

      {/* TEXT SECTION */}
      <div className="mag-content">
        <div className="mag-header">
          <h2>{project.title}</h2>
          <h3>{project.subtitle}</h3>
        </div>

        <p className="mag-desc">{project.descriptionCard}</p>

        <div className="mag-tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="mag-links">
          <a href={project.link} onClick={(e) => e.stopPropagation()}>
            View Project →
          </a>

          <a href={project.github} onClick={(e) => e.stopPropagation()}>
            Source
          </a>
        </div>
      </div>
    </article>
  );

  return (
    <div className="projects-page">
      {/* FILTER */}
      <div className="filter-bar">
        {filters.map((f) => (
          <button
            key={f.id}
            className={`filter-btn ${activeFilter === f.id ? "active" : ""}`}
            onClick={() => setActiveFilter(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="projects-grid">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
