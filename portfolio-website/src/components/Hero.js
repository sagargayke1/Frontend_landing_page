import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

/**
 * Hero component - Main landing section of the portfolio
 * Features: Introduction, CTA buttons, social links, resume download
 */
const Hero = () => {
  // Handle resume download
  const handleResumeDownload = () => {
    // Create a dummy resume download link
    // In a real project, you would replace this with the actual resume file path
    const resumeUrl = '/resume.pdf'; // This would be placed in the public folder
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Sameer_Jadhav_Resume.pdf'; // Replace with actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="hero-content">
          {/* Main Content */}
          <div className="hero-text">
            <h1 className="hero-title fade-in-up">
              Hi, I'm <span className="text-gradient">Sameer Jadhav</span>
            </h1>
            <h2 className="hero-subtitle fade-in-up">
              Frontend Developer & UI/UX Enthusiast
            </h2>
            <p className="hero-description fade-in-up">
              I craft beautiful, responsive web experiences using modern technologies. 
              Passionate about clean code, user-centered design, and bringing creative 
              ideas to life through interactive web applications.
            </p>

            {/* Call to Action Buttons */}
            <div className="hero-buttons fade-in-up">
              <button 
                className="btn btn-primary"
                onClick={scrollToProjects}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary"
                onClick={handleResumeDownload}
              >
                <FaDownload className="btn-icon" />
                Download Resume
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-social fade-in-up">
              <a 
                href="https://github.com/jadhav9" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href="https://www.linkedin.com/in/sameer-jadhav-0a718522b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:sameerallmca@gmail.com"
                className="social-link"
                aria-label="Send Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="hero-visual">
            <div className="hero-avatar float">
              <div className="avatar-placeholder">
                <span>SJ</span>
              </div>
            </div>
            
            {/* Floating Tech Icons */}
            <div className="floating-icons">
              <div className="floating-icon" style={{ '--delay': '0s' }}>⚛️</div>
              <div className="floating-icon" style={{ '--delay': '1s' }}>🎨</div>
              <div className="floating-icon" style={{ '--delay': '2s' }}>💻</div>
              <div className="floating-icon" style={{ '--delay': '3s' }}>🚀</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-text">Scroll Down</div>
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 