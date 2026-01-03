import React, { useEffect, useRef, useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export function Connect() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="connect" className="py-24 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8">
          <div
            className={`space-y-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-balance">Let's Connect</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question, know of any career openings, or just want to say hi, feel free to reach out!
            </p>
          </div>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="mailto:sebastian@eshirazi.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>

          <div
            className={`flex items-center justify-center gap-4 pt-8 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://linkedin.com/in/sebastian-shirazi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sebastian-shirazi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Connect;
