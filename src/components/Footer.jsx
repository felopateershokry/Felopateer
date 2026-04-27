import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/about#skills" },
  { label: "Experience", path: "/about#experience" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/felopateershokry/" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/felopateer-shokry-242a83356",
  },
  { label: "Email", href: "mailto:pphilopateershukri@gamil.com" },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleHashNav = (e, path) => {
    if (!path.includes("#")) return; // let normal Link handle it
    e.preventDefault();

    const base = path.split("#")[0];
    const hash = path.split("#")[1];

    if (location.pathname === base) {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(base);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            Felopateer<em>.</em>
          </div>
          <div className="footer-tagline">
            Computer and Communication Engineering student <br /> & MERN Stack developer based in Alexandria,
            Egypt.
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.path} onClick={(e) => handleHashNav(e, l.path)}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SOCIALS */}
        <div>
          <div className="footer-col-title">Connect</div>
          <ul className="footer-links">
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span className="footer-copy">
          © 2025 Felopateer Shokry. All rights reserved.
        </span>
        <span className="footer-made">Designed & built with care.</span>
      </div>
    </footer>
  );
}
