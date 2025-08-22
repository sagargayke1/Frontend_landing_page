import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import './Contact.css';

/**
 * Contact component - Contact form and information
 * Features: Contact form, social links, contact information
 */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sameerallmca@gmail.com",
      link: "mailto:sameerallmca@gmail.com"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      value: "+919179445450",
      link: "tel:+919179445450"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Indore, India",
      link: "https://maps.google.com?q=Indore, India"
    }
  ];

  // Social links
  const socialLinks = [
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sameer-jadhav-0a718522b/"
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/jadhav9"
    }
  ];

  return (
    <section id="contact" className="contact section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="section-description">
            Let's discuss your next project or opportunity
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-container">
            <div className="form-header">
              <h3>Send Me a Message</h3>
              <p>I'd love to hear from you. Send me a message and I'll respond as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or opportunity..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="form-status success">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="form-status error">
                  ❌ Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-container">
            <div className="contact-info-header">
              <h3>Contact Information</h3>
              <p>Prefer to reach out directly? Here are my contact details.</p>
            </div>

            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  className="contact-info-item"
                  target={info.link.startsWith('http') ? '_blank' : '_self'}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="contact-icon">
                    {info.icon}
                  </div>
                  <div className="contact-details">
                    <div className="contact-title">{info.title}</div>
                    <div className="contact-value">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-section">
              <h4>Follow Me</h4>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 