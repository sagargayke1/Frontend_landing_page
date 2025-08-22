import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';
import './Projects.css';

/**
 * Projects component - Showcases portfolio projects
 * Features: Project cards, filtering, live demos, source code links
 */
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Project data
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "A modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and order management.",
      image: "🛒",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
      category: "fullstack",
      githubUrl: "https://github.com/jadhav9/ecommerce-dashboard",
      liveUrl: "https://ecommerce-dashboard-demo.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.",
      image: "📋",
      technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      category: "frontend",
      githubUrl: "https://github.com/jadhav9/task-manager",
      liveUrl: "https://task-manager-demo.netlify.app",
      featured: true
    },
    {
      id: 3,
      title: "Weather Forecast App",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "🌤️",
      technologies: ["React", "OpenWeather API", "CSS3", "JavaScript"],
      category: "frontend",
      githubUrl: "https://github.com/jadhav9/weather-app",
      liveUrl: "https://weather-forecast-demo.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Blog CMS Platform",
      description: "A full-stack content management system for bloggers with rich text editing, media management, and SEO optimization.",
      image: "✍️",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack",
      githubUrl: "https://github.com/johndoe/blog-cms",
      liveUrl: "https://blog-cms-demo.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with modern design and smooth animations.",
      image: "💼",
      technologies: ["React", "CSS3", "Framer Motion", "React Icons"],
      category: "frontend",
      githubUrl: "https://github.com/jadhav9/portfolio",
      liveUrl: "https://johndoe-portfolio.vercel.app",
      featured: false
    },
    {
      id: 6,
      title: "Real-time Chat App",
      description: "A real-time messaging application with group chats, file sharing, emoji reactions, and online status indicators.",
      image: "💬",
      technologies: ["React", "Socket.io", "Node.js", "Express"],
      category: "fullstack",
      githubUrl: "https://github.com/johndoe/chat-app",
      liveUrl: "https://realtime-chat-demo.herokuapp.com",
      featured: true
    }
  ];

  // Filter categories
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'fullstack', name: 'Full Stack' }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="projects section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="section-description">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-section">
          <h3 className="featured-title">Featured Projects</h3>
          <div className="featured-grid">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="project-card featured-card"
                style={{ '--delay': `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <div className="image-placeholder">
                    <span className="project-emoji">{project.image}</span>
                  </div>
                  <div className="project-overlay">
                    <div className="project-links">
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Live Demo"
                      >
                        <FaPlay />
                      </a>
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                        aria-label="View Source Code"
                      >
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Filter */}
        <div className="project-filter">
          <h3 className="filter-title">All Projects</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="project-card"
              style={{ '--delay': `${index * 0.1}s` }}
            >
              <div className="project-image">
                <div className="image-placeholder">
                  <span className="project-emoji">{project.image}</span>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Source Code"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4 className="project-title">{project.title}</h4>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="projects-cta">
          <p>Want to see more of my work?</p>
          <a 
            href="https://github.com/jadhav9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <FaGithub className="btn-icon" />
            View GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 