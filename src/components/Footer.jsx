import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Email", href: "mailto:yourmail@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        {/* BRAND */}
        <div className="footer-brand-col">
          <div className="footer-brand">
            Felopateer<em>.</em>
          </div>

          <div className="footer-tagline">
            Engineering student & MERN Stack developer based in Alexandria,
            Egypt.
          </div>
        </div>

        {/* NAVIGATION */}
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.path}>{l.label}</Link>
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
