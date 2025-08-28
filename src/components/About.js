import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know more about me!</p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate software developer with a love for AI technologies. When I'm not coding,
                you can find me playing soccer, listening to some music, or getting a lift in at the gym.
                I love learning about how technology shapes society and how evolving technology is adapted
                and used by everyday people.
              </p>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <h4>Background</h4>
                <p>
                  With a strong education background in data structures, software deisgn principles, and even
                  computational theory I hope to bring some analytical thinking and design skills to the workplace. 
                  I am a big proponent of clean, simplistic code that is not only functional but eligant.
                </p>
              </div>
              
              <div className="detail-item">
                <h4>Interests</h4>
                <p>
                  As I already touched on before, I love to stay active and fit. I grew up playing a variety
                  of sports and have now switched to weightlifting as my life has progressed. I also love all
                  things music, whether that be classical, dad rock, and especially rap (listen to Nettspend trust me). 
                  This interest stems from me playing piano and violin as I was growing up!
                </p>
              </div>
              
              <div className="detail-item">
                <p>
                  Come check out my spotify if you would like (not quite sure if my playlists are public...)
                </p>
                <a 
                  href="https://open.spotify.com/user/vividphoenix1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="spotify-link"
                >
                  <svg className="spotify-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.24 12.84c.361.181.54.78.301 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="about-visual">
            <div className="about-card">
              <div className="card-header">
                <h4>Professional Background</h4>
              </div>
              <div className="facts-list">
                <div className="fact-item">
                  <div className="fact-content">
                    <h4>Education</h4>
                    <h6>University of Virginia (Aug '22 - Dec '25)</h6>
                    <p>B.S. in Computer Science</p>
                    <p>Minor in Data Science</p>
                    <p>Minor in Engineering Business</p>
                  </div>
                </div>
                
                <div className="fact-item">
                  <div className="fact-content">
                    <h4>Experience</h4>
                    <p>3+ years in Python, Java, and C experience</p>
                    <p> Software Engineering - Built a web application for event planning, 
                        course registration, and for a portfolio website
                    </p>
                    <p>Cybersecurity - Intered on Threat Detection and Response team,
                        worked on backend development for an OSINT Threat Intelligence Platform
                    </p>
                    <p>AI - LLM Research Assistant at UVA building unity pipeline with GPT-4o, 
                        knowledable in AI development tools
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="resume-section">
          <div className="resume-card">
            <h3>Resume</h3>
            <p>Please feel free to view my resume!</p>
            <a 
              href="/Sebastian-Resume-F25.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
