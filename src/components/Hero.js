import React, { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Calculate opacity based on scroll position
  const imageOpacity = Math.max(0, 1 - (scrollY / 500)); // Fade out over 500px scroll

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Sebastian Shirazi</span>
          </h1>
          <p className="hero-subtitle">
            Undergrad CS Student & Aspiring Software Engineer
          </p>
          <p className="hero-description">
            A fourth-year student at the University of Virginia 
            who is eager to grow as a developer. With interests 
            in Software Engineering, Artificial Intelligence, and
            Network Security I am always looking for new opportunities.
          </p>
          
          <div className="hero-buttons">
            <button 
              className="btn btn-secondary"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </button>
            <button 
              className="btn btn-primary"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="hero-visual">
          <div 
            className="profile-image"
            style={{ opacity: imageOpacity }}
          >
            <img 
              src="/pfp-portfolio.jpeg" 
              alt="Sebastian Shirazi"
            />
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;
