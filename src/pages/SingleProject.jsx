import React, { useEffect, useState } from "react";
import "./SingleProject.css";
import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../assets/assets";

const SingleProject = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [animate, setAnimate] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const project = projects.find((p) => p.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
    setTimeout(() => setAnimate(true), 100);
  }, [id]);

  /* ================= KEYBOARD CONTROLS ================= */
  useEffect(() => {
    const handleKey = (e) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen]);

  if (!project) return <div>Project not found</div>;

  const images = project.images || [project.image];

  const getImage = (index) => images[(index + images.length) % images.length];

  const changeImage = (action) => {
    if (isAnimating) return;

    setIsAnimating(true);
    action();

    setTimeout(() => {
      setIsAnimating(false);
    }, 400);
  };

  const nextImage = () =>
    changeImage(() => setActiveImage((prev) => (prev + 1) % images.length));

  const prevImage = () =>
    changeImage(() =>
      setActiveImage((prev) => (prev - 1 + images.length) % images.length),
    );

  return (
    <div className={`single-project ${animate ? "active" : ""}`}>
      {/* ================= HERO CAROUSEL ================= */}
      <div className="hero-carousel">
        <button className="nav left" onClick={prevImage}>
          ‹
        </button>

        <div className="image-track">
          <div className="side-image left">
            <img
              src={getImage(activeImage - 1)}
              alt="previous view"
              loading="lazy"
            />
          </div>

          {/* MAIN IMAGE */}
          <div className="main-image" onClick={() => setLightboxOpen(true)}>
            <img
              src={getImage(activeImage)}
              alt={project.title}
              loading="eager"
            />
          </div>

          <div className="side-image right">
            <img
              src={getImage(activeImage + 1)}
              alt="next view"
              loading="lazy"
            />
          </div>
        </div>

        <button className="nav right" onClick={nextImage}>
          ›
        </button>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div className="lightbox" onClick={() => setLightboxOpen(false)}>
          {/* Close Button */}
          <button
            className="lightbox-close"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxOpen(false);
            }}
          >
            ✕
          </button>

          {/* Left Arrow */}
          <button
            className="lightbox-nav left"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
          >
            ‹
          </button>

          {/* Image */}
          <img
            className="lightbox-image"
            src={getImage(activeImage)}
            alt="fullscreen preview"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Right Arrow */}
          <button
            className="lightbox-nav right"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
          >
            ›
          </button>
        </div>
      )}

      {/* ================= ARTICLE ================= */}
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
          {project.links.map((link, index) => (
            <a key={index} href={link} target="_blank" rel="noreferrer">
              {index === 0 ? "Live Project →" : "Secondary Link →"}
            </a>
          ))}
        </div>

        <button className="back" onClick={() => navigate(-1)}>
          ← Back to Projects
        </button>
      </div>
    </div>
  );
};

export default SingleProject;
