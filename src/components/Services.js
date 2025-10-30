import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-palette",
      title: "UI/UX Design",
      description:
        "Designing user-centered interfaces that enhance usability and create seamless user experiences across web and mobile platforms.",
    },
    {
      id: 2,
      icon: "fas fa-laptop-code",
      title: "Web Design",
      description:
        "I design intuitive, responsive interfaces that provide seamless user experiences across all devices.",
    },
    {
      id: 3,
      icon: "fas fa-code",
      title: "Web Development",
      description:
        "From dynamic front-ends to powerful back-end systems, I build full-featured web applications using modern frameworks.",
    },
    {
      id: 4,
      icon: "fas fa-brand",
      title: "Brand Identity",
      description:
        "I craft consistent, impactful brand experiences across your web applications.",
    },
    {
      id: 5,
      icon: "fas fa-chart-line",
      title: "Business Analysis",
      description:
        "Bridge the gap between business needs and technical implementation.",
    },
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="services-intro">
          <p className="services-description">
            How I can help take your next project to new heights! As a Full
            Stack Developer, I deliver robust, scalable, and custom web
            solutions from front-end design to back-end functionality. My work
            prioritizes performance, user experience, and clean, maintainable
            code to turn your ideas into powerful digital products.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
