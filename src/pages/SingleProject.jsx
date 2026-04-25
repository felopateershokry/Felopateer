import React, { useEffect, useState } from "react";
import "./SingleProject.css";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../assets/assets";

const SingleProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setAnimate(true), 100);
  }, [id]);

  if (!project) return <div>Project not found</div>;

  const images = project.images || [project.image];

  const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const getImage = (index) => {
    return images[(index + images.length) % images.length];
  };

  return (
    <div className={`single-project ${animate ? "active" : ""}`}>
      {/* HERO CAROUSEL */}
      <div className="hero-carousel">
        <button className="nav left" onClick={prevImage}>
          ‹
        </button>

        <div className="image-track">
          {/* LEFT (prev blurred) */}
          <div className="side-image left">
            <img src={getImage(activeImage - 1)} alt="prev" />
          </div>

          {/* CENTER */}
          <div className="main-image">
            <img src={getImage(activeImage)} alt={project.title} />
          </div>

          {/* RIGHT (next blurred) */}
          <div className="side-image right">
            <img src={getImage(activeImage + 1)} alt="next" />
          </div>
        </div>

        <button className="nav right" onClick={nextImage}>
          ›
        </button>
      </div>

      {/* ARTICLE (magazine style) */}
      <div className="article">
        <div className="title-block">
          <h1>{project.title}</h1>
          <h3>{project.subtitle}</h3>
        </div>

        <p className="desc">{project.description}</p>

        <div className="tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="links">
          <a href={project.link} target="_blank" rel="noreferrer">
            Live Project →
          </a>
          <a href={project.github} target="_blank" rel="noreferrer">
            Source Code →
          </a>
        </div>

        <button className="back" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
