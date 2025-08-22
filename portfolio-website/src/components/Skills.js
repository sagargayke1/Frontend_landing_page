import React from 'react';
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaGitAlt,
  FaPython,
  FaFigma 
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiExpress,
  SiNextdotjs,
  SiVuedotjs,
  SiPostgresql,
  SiRedux
} from 'react-icons/si';
import './Skills.css';

/**
 * Skills component - Showcases technical skills and expertise
 * Features: Categorized skills, tech stack icons, clean card layout
 */
const Skills = () => {
  // Skills data organized by categories (removed level/percentage)
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact />, color: "#61DAFB" },
        { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
        { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
        { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#06B6D4" }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNode />, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
        { name: "Python", icon: <FaPython />, color: "#3776AB" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
        { name: "Vue.js", icon: <SiVuedotjs />, color: "#4FC08D" },
        { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" }
      ]
    }
  ];

  // Featured technologies for the hero grid
  const featuredTech = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Node.js", icon: <FaNode />, color: "#339933" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" }
  ];

  return (
    <section id="skills" className="skills section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="section-description">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        {/* Featured Tech Grid */}
        <div className="featured-tech">
          <h3 className="featured-title">Core Technologies</h3>
          <div className="tech-grid">
            {featuredTech.map((tech, index) => (
              <div 
                key={index} 
                className="tech-card"
                style={{ '--delay': `${index * 0.1}s` }}
              >
                <div 
                  className="tech-icon"
                  style={{ color: tech.color }}
                >
                  {tech.icon}
                </div>
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Categories */}
        <div className="skills-categories">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="skill-category"
              style={{ '--delay': `${categoryIndex * 0.2}s` }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-card"
                    style={{ '--delay': `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    <div 
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="skills-summary">
          <div className="summary-stats">
            <div className="stat-item">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 