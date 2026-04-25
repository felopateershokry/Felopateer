import React from "react";
import "./Cards.css";
import { useNavigate } from "react-router-dom";
import { projects } from "../assets/assets";

export default function ProjectsCard() {
  const navigate = useNavigate();

  return (
    <div
      className="card col-8"
      id="projects"
      onClick={() => navigate("/projects")}
    >
      <div className="card-tag">Projects</div>
      <h2>Selected Work</h2>

      <div className="proj-list">
        {projects.slice(0, 4).map((project) => (
          <div className="proj-item" key={project.id}>
            <span
              className="proj-name"
              onClick={(e) => {
                e.stopPropagation(); // يمنع فتح /projects
                navigate(`/projects/${project.id}`);
              }}
            >
              {project.title}
            </span>

            <span className="proj-tech">{project.tech.join(" · ")}</span>
          </div>
        ))}
      </div>

      <span className="card-link">All projects →</span>
    </div>
  );
}
