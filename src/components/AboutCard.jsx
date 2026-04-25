import React from 'react';
import './Cards.css';
import { useNavigate } from 'react-router-dom';

export default function AboutCard() {

  const navigate = useNavigate();


  return (
    <div className="card card-about col-7" id="about" onClick={() => navigate("/about")}>
      <div className="card-tag">About</div>
      <h2>
        Engineering Mind,<br />
        <em>Developer Soul</em>
      </h2>
      <blockquote className="pull-quote">
        "Building things that actually work — and look good doing it."
      </blockquote>
      <p>
        Currently studying at the Faculty of Engineering, Alexandria University.
        Completed a professional diploma in MERN Stack development, covering
        MongoDB, Express, React, and Node.js from the ground up.
      </p>
      <a href="#contact" className="card-link">Get in touch →</a>
    </div>
  );
}
