import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          description: "Built this website using React for the frontend."
        },
        {
          name: "JavaScript",
          description: "Used JavaScript for a variety of projects for handling user web experience, both in and out of school."
        },
        {
          name: "HTML/CSS",
          description: "Used HTML and CSS for web development apps, used CSS with Bootstrap for styling."
        },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Python",
          description: "Familiar with popular libraries such as numpy and tensorflow, used for scripting, automation, and machine learning tasks."
        },
        {
          name: "Java",
          description: "Used for development of backend services, data structures, and finite state automaton problems."
        },
        {
            name: "C",
            description: "Learned in school for memory management and performance optimizations, has been used in pagetables implementation."
        },
        {
          name: "Django",
          description: "Primary web development framework for my projects, used Django for implementation of MVC architecture."
        },
        {
            name: "Flask",
            description: "Used in personal projects to learn fundamentals of REST."
        },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          description: "Proficient in version control workflows, including rebasing and branch control, for CI/CD development."
        },
        {
          name: "Docker",
          description: "Containerized applications for lightweight development and deployment, used in both personal and professional settings."
        },
        {
          name: "AWS",
          description: "Deployed applications integrated with AWS services including EC2, S3, and Lambda."
        },
        {
          name: "Heroku",
          description: "Used in deployment of event planning web application."
        },
        {
          name: "VS Code",
          description: "Primary development environment with custom extensions and integrations with git."
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies I have used</p>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-card">
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
