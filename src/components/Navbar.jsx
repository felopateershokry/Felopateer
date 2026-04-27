import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const currentPath = location.pathname;

  const isActive = (path) => {
    const base = path.split("#")[0];
    const hash = path.includes("#") ? `#${path.split("#")[1]}` : "";
    return currentPath === base && (!hash || location.hash === hash);
  };

  // Handles links that have a hash (e.g. /about#skills)
  const handleHashNav = (e, path) => {
    e.preventDefault();
    setMenuOpen(false);

    const base = path.split("#")[0];
    const hash = path.includes("#") ? path.split("#")[1] : "";

    if (currentPath === base) {
      // Already on the right page — just scroll
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the page, then scroll once it mounts
      navigate(base);
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="nav-top">
        <span className="nav-date">Alexandria, Egypt · 2026</span>
        <span className="nav-tagline">Engineering · Development · Design</span>
      </div>

      {/* MAIN NAV */}
      <div className="nav-main">
        {/* LOGO */}
        <a href="/" className="nav-logo">
          Felopateer<em>.</em>
        </a>

        {/* HAMBURGER */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="/about"
              className={isActive("/about") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className={isActive("/projects") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="/about#skills"
              className={isActive("/about#skills") ? "active" : ""}
              onClick={(e) => handleHashNav(e, "/about#skills")}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="/about#experience"
              className={isActive("/about#experience") ? "active" : ""}
              onClick={(e) => handleHashNav(e, "/about#experience")}
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="/contact"
              className={isActive("/contact") ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
