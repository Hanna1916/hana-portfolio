import React from "react";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h2>Hello! I'm Hana Kassie.</h2>
            <p>
              I am a passionate Full Stack Web Developer who blends user-centric
              design with modern development technologies to create seamless
              digital experiences.
            </p>
            <p>
              My focus is on delivering high-quality solutions that are on time,
              on budget, and aligned with client goals. Whether it's front-end
              interfaces or back-end systems, I bring a holistic approach to
              development. Let's build something impactful together.
            </p>
            <div className="stats">
              <div className="stat-item">
                <span className="stat-number">6+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Projects Done</span>
              </div>
            </div>
            <a href="#portfolio" className="btn">
              Discover My Work
            </a>
          </div>
          <div className="about-image">
            <img
              src="/images/hanaProfile.jpg"
              alt="Hana Kassie - Full Stack Developer"
              className="profile-img"
              onError={(e) => {
                e.target.src = "/images/placeholder.jpg"; // Fallback image
                e.target.alt = "Profile Image Placeholder";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
