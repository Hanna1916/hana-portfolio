import React, { useState } from "react";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Hana Kassie</a>
        </div>
        <div className={`nav-menu ${isActive ? "active" : ""}`}>
          <a
            href="#home"
            className="nav-link"
            onClick={() => setIsActive(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className="nav-link"
            onClick={() => setIsActive(false)}
          >
            About
          </a>
          <a
            href="#services"
            className="nav-link"
            onClick={() => setIsActive(false)}
          >
            Services
          </a>{" "}
          {/* ← ADD THIS */}
          <a
            href="#portfolio"
            className="nav-link"
            onClick={() => setIsActive(false)}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="nav-link"
            onClick={() => setIsActive(false)}
          >
            Contact
          </a>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
