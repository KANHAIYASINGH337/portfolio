import { useState } from "react";
import "../App.css";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* LOGO / NAME */}
      <div className="nav-logo">Kanhaiya singh</div>

      {/* NAV LINKS */}
      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>

      {/* RIGHT ICONS */}
      <div className="nav-icons">
        {/* THEME TOGGLE (ICON ONLY) */}
        <button
          className="theme-icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Toggle Theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setOpen(!open)}>
          ☰
        </div>
      </div>

    </nav>
  );
}
