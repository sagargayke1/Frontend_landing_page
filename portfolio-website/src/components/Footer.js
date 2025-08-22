import React from 'react';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';
import './Footer.css';

/**
 * Footer component - Final section with copyright and links
 * Features: Social links, back to top button, copyright notice
 */
const Footer = () => {
  // Handle scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Get current year
  const currentYear = new Date().getFullYear();

  // Social links
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/jadhav9"
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sameer-jadhav-0a718522b/"
    },
    {
      icon: <FaTwitter />,
      name: "Twitter",
      url: "https://twitter.com/sameerjadhav"
    }
  ];

  // Quick navigation links
  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  // Handle navigation click
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Content */}
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
                      <div className="footer-logo">
            <span className="logo-text">Sameer Jadhav</span>
          </div>
            <p className="footer-description">
              Frontend Developer passionate about creating beautiful and functional web experiences. 
              Let's build something amazing together.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-nav">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="footer-nav-link"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-contact-info">
              <p>
                <strong>Email:</strong>
                <a href="mailto:sameerallmca@gmail.com">sameerallmca@gmail.com</a>
              </p>
              <p>
                <strong>Location:</strong>
                Indore, India
              </p>
              <p>
                <strong>Status:</strong>
                <span className="status-available">Available for work</span>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Sameer Jadhav. Made with <FaHeart className="heart-icon" /> using React.
            </p>
            <p className="footer-credits">
              Designed & Developed by Sameer Jadhav
            </p>
          </div>
          
          {/* Back to Top Button */}
          <button 
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 