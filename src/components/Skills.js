import React, { useEffect, useRef, useState } from 'react';

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "React Native", "Expo", "Bootstrap", "HTML/CSS"]
    },
    {
      title: "Backend Development", 
      skills: ["Python", "Node.js", "MySQL", "SQLite", "Java", "C", "Django", "Flask"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "Docker", "AWS", "Google OAuth", "Google Cloud", "Unity", "Heroku", "VS Code"]
    }
  ];

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
    <section id="skills" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 100}ms` }}
            >
              <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-6 text-center md:text-left">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium hover:border-foreground/30 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
