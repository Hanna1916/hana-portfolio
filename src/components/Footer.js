import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Social links configuration
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hana-kassie-081ab4146/",
      icon: "fab fa-linkedin",
      username: "hana-kassie",
    },
    {
      name: "GitHub",
      url: "https://github.com/Hanna1916",
      icon: "fab fa-github",
      username: "Hanna1916",
    },
    {
      name: "Email",
      url: "mailto:haniworku@net.com",
      icon: "fas fa-envelope",
      username: "haniworku@net.com",
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Hana Kassie</h3>
            <p>
              Full Stack Developer passionate about creating amazing digital
              experiences.
            </p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target={social.name !== "Email" ? "_blank" : "_self"}
                  rel={social.name !== "Email" ? "noopener noreferrer" : ""}
                  aria-label={social.name}
                  className="social-link"
                  title={`Visit my ${social.name} - ${social.username}`}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h3>Contact Info</h3>
            <p>📍 Frederick, MD, USA 21704</p>
            <p>🕒 Mon to Fri (10 am – 8 pm)</p>
            <p>📧 haniworku@gmail.com</p>
            <p>📞 (+123) 456 789</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <div className="footer-links-list">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Copyright © {currentYear} Hana Kassie. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/terms" className="footer-link">
              Terms & Policy
            </a>
            <a href="/disclaimer" className="footer-link">
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
