import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          WELCOME TO MY PAGE <span className="highlight">WORKHARD</span>
        </h1>
        <h2>ANYWHERE</h2>
        <p>I'm a Full Stack Developer based in Frederick, Maryland.</p>
        <a href="/assets/resume.pdf" className="btn" download>
          Download CV
        </a>
      </div>
    </section>
  );
};

export default Hero;
