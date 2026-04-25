import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (label) => {
    setActive(label);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* TOP BAR */}
      <div className="nav-top">
        <span className="nav-date">Alexandria, Egypt · 2025</span>
        <span className="nav-tagline">Engineering · Development · Design</span>
      </div>

      {/* MAIN NAV */}
      <div className="nav-main">
        <Link to="/" className="nav-logo">
          Felopateer<em>.</em>
        </Link>

        {/* HAMBURGER */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* LINKS */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                to={link.path}
                className={active === link.label ? "active" : ""}
                onClick={() => handleClick(link.label)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
