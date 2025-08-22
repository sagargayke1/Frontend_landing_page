import React from 'react';
import { FaCode, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa';
import './About.css';

/**
 * About component - Showcases developer background and philosophy
 * Features: Personal intro, values, experience highlights
 */
const About = () => {
  // Core values/principles
  const values = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable, readable code that scales with your business needs."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Staying current with latest technologies and best practices in web development."
    },
    {
      icon: <FaRocket />,
      title: "Performance",
      description: "Building fast, optimized applications that provide excellent user experiences."
    },
    {
      icon: <FaHeart />,
      title: "User-Centric",
      description: "Designing with users in mind, creating interfaces that are intuitive and accessible."
    }
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="section-description">
            Get to know the developer behind the code
          </p>
        </div>

        <div className="about-content">
          {/* Personal Info */}
          <div className="about-text">
            <div className="about-intro">
              <h3 className="intro-title">Hello! I'm Sameer Jadhav</h3>
              <p className="intro-text">
                A passionate Frontend Developer with over 3 years of experience creating 
                digital experiences that combine beautiful design with robust functionality. 
                I specialize in React.js, modern JavaScript, and building responsive web applications 
                that users love to interact with.
              </p>
            </div>

            <div className="about-details">
              <p>
                My journey into web development started with curiosity about how websites work, 
                and it has evolved into a career focused on crafting exceptional user experiences. 
                I believe that great software is not just about clean code, but about solving 
                real problems for real people.
              </p>
              
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community. 
                I'm always excited to take on new challenges and collaborate with teams that 
                share my passion for innovation.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="quick-facts">
              <div className="fact-item">
                <span className="fact-label">Location:</span>
                <span className="fact-value">Indore, India</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Experience:</span>
                <span className="fact-value">3+ Years</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Specialty:</span>
                <span className="fact-value">Frontend Development</span>
              </div>
              <div className="fact-item">
                <span className="fact-label">Availability:</span>
                <span className="fact-value">Open for opportunities</span>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="about-visual">
            <div className="profile-card">
              <div className="profile-image">
                <div className="image-placeholder">
                  <span>👨‍💻</span>
                </div>
                <div className="profile-ring"></div>
              </div>
              <div className="profile-info">
                <h4>Sameer Jadhav</h4>
                <p>Frontend Developer</p>
                <div className="profile-status">
                  <div className="status-indicator"></div>
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <h3 className="values-title">What I Bring to the Table</h3>
          <div className="values-grid">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="value-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div className="value-icon">
                  {value.icon}
                </div>
                <h4 className="value-title">{value.title}</h4>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-cta">
          <h3>Let's Build Something Amazing Together</h3>
          <p>Ready to bring your ideas to life? Let's discuss your next project.</p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default About; 