import React, { useEffect, useState, useCallback } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'connect', label: 'Connect' },
];

export function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + window.innerHeight / 3;
    
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = document.getElementById(sections[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sections[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
      <nav className="flex flex-col gap-4">
        {sections.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className="group relative flex items-center p-2 -m-2"
            aria-label={`Go to ${label}`}
          >
            <div
              className={`w-0.5 transition-all duration-300 rounded-full ${
                activeSection === id
                  ? 'h-12 bg-foreground'
                  : 'h-8 bg-foreground/30 group-hover:h-10 group-hover:bg-foreground/50'
              }`}
            />
          </button>
        ))}
      </nav>
    </div>
  );
}

export default ScrollIndicator;
