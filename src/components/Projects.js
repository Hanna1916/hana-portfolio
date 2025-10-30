import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description:
        "A full-stack Netflix clone with user authentication, movie browsing, and video playback functionality. Features responsive design and modern UI components.",
      tags: ["React", "Node.js", "MYSQL", "CSS", "JavaScript"],
      image: "/images/Netflix.jpg",
      liveUrl: "https://hanna1916.github.io/MyMovieApp/",
      githubUrl: "https://github.com/Hanna1916/MyMovieApp.git",
      featured: true,
    },
    {
      id: 2,
      title: "Amazon E-commerce",
      description:
        "A complete e-commerce platform inspired by Amazon with shopping cart, user authentication, payment integration, and order management system.",
      tags: ["React", "Express.js", "MongoDB", "Stripe", "CSS", "Firebase"],
      image: "/images/Amazon.jpg",
      liveUrl: "https://teal-dragon-df4d38.netlify.app/",
      githubUrl: "https://github.com/Hanna1916/hanna-demo-store.git",
      featured: true,
    },
    {
      id: 3,
      title: "Evangadi Forum",
      description:
        "A community discussion forum with real-time messaging, user profiles, and content moderation features. Built for educational purposes.",
      tags: ["React", "Node.js", "Socket.io", "MYSQL", "CSS"],
      image: "/images/EvangadiForum.jpg",
      liveUrl: "https://mellifluous-crisp-1091e8.netlify.app/",
      githubUrl: "https://github.com/Hanna1916/evangadiForum-Fronted.git",
      featured: true,
    },
  ];

  return (
    <section id="portfolio" className="projects section">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {/* Filter buttons removed - only showing the 3 featured projects */}

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  onError={(e) => {
                    e.target.src = "/images/placeholder.jpg";
                  }}
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link live-demo"
                    >
                      <i className="fas fa-external-link-alt"></i> Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <i className="fab fa-github"></i> Code
                    </a>
                  </div>
                </div>
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fas fa-star"></i> Featured
                  </div>
                )}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
