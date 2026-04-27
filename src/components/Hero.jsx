import React from "react";
import "./Hero.css";
import myPhoto from "../assets/me.jpg"; // put your image here
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  return (
    <section className="hero">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <div className="hero-kicker">Portfolio · 2026</div>

        <h1>
          Felopateer
          {/* <br className="br"/> */}
          <em>Shokry</em>
        </h1>

        <p className="hero-sub">
          Engineering student at Alexandria University & certified MERN Stack
          developer — crafting purposeful digital experiences.
        </p>

        <div className="hero-actions">
          <a className="btn-primary" onClick={() => navigate("/projects")}>
            View Projects
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </div>
      </div>


      <div className="hero-right">
        <div className="hero-image-wrapper">
          <img src={myPhoto} alt="Felopateer Shokry" className="hero-image" />
        </div>
      </div>
    </section>
  );
}
