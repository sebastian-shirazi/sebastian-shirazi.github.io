import React from 'react';
import './Skills.css';
import { 
  DiReact, 
  DiJavascript1, 
  DiHtml5, 
  DiCss3, 
  DiPython, 
  DiJava, 
  DiGit,
  DiDocker,
  DiAws,
  DiHeroku,
  DiVisualstudio
} from 'react-icons/di';
import {
  SiFlask,
  SiDjango,
  SiC,
  SiTypescript,
  SiReact,
  SiExpo,
  SiBootstrap,
  SiNodedotjs,
  SiMysql,
  SiSqlite,
  SiGoogle,
  SiGooglecloud,
  SiUnity
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        {
          name: "React",
          icon: <DiReact />,
          description: "Built this website using React for the frontend."
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          description: "Used TypeScript to build typed, maintainable UI features in my mobile/web projects."
        },
        {
          name: "JavaScript",
          icon: <DiJavascript1 />,
          description: "Used JavaScript for a variety of projects for handling user web experience, both in and out of school."
        },
        {
          name: "React Native",
          icon: <SiReact />,
          description: "Built mobile app features in React Native, including screens, navigation, and map-based experiences."
        },
        {
          name: "Expo",
          icon: <SiExpo />,
          description: "Used Expo to develop and run React Native apps quickly during iteration and testing."
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap />,
          description: "Used Bootstrap components and utility classes to speed up responsive UI styling."
        },
        {
          name: "HTML/CSS",
          icon: <><DiHtml5 /><DiCss3 /></>,
          description: "Used HTML and CSS for web development apps, used CSS with Bootstrap for styling."
        },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        {
          name: "Python",
          icon: <DiPython />,
          description: "Familiar with popular libraries such as numpy and tensorflow, used for scripting, automation, and machine learning tasks."
        },
        {
          name: "Node.js",
          icon: <SiNodedotjs />,
          description: "Built backend services and APIs with Node.js to support application features."
        },
        {
          name: "MySQL",
          icon: <SiMysql />,
          description: "Designed and queried relational schemas in MySQL 8.0 to store application data."
        },
        {
          name: "SQLite",
          icon: <SiSqlite />,
          description: "Used SQLite for lightweight local development and data persistence in web apps."
        },
        {
          name: "Java",
          icon: <DiJava />,
          description: "Used for development of backend services, data structures, and finite state automaton problems."
        },
        {
            name: "C",
            icon: <SiC />,
            description: "Learned in school for memory management and performance optimizations, has been used in pagetables implementation."
        },
        {
          name: "Django",
          icon: <SiDjango />,
          description: "Primary web development framework for my projects, used Django for implementation of MVC architecture."
        },
        {
            name: "Flask",
            icon: <SiFlask />,
            description: "Used in personal projects to learn fundamentals of REST."
        },
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        {
          name: "Git",
          icon: <DiGit />,
          description: "Proficient in version control workflows, including rebasing and branch control, for CI/CD development."
        },
        {
          name: "Docker",
          icon: <DiDocker />,
          description: "Containerized applications for lightweight development and deployment, used in both personal and professional settings."
        },
        {
          name: "AWS",
          icon: <DiAws />,
          description: "Deployed applications integrated with AWS services including EC2, S3, and Lambda."
        },
        {
          name: "Google OAuth",
          icon: <SiGoogle />,
          description: "Implemented Google OAuth for authentication so users can sign in securely with their Google account."
        },
        {
          name: "Google Cloud",
          icon: <SiGooglecloud />,
          description: "Used Google Cloud services for managed infrastructure (including hosted SQL) in full-stack projects."
        },
        {
          name: "Unity",
          icon: <SiUnity />,
          description: "Built a Unity pipeline for 3D generative AI modeling through GPT-4o and DALL-E"
        },
        {
          name: "Heroku",
          icon: <DiHeroku />,
          description: "Used in deployment of event planning web application."
        },
        {
          name: "VS Code",
          icon: <DiVisualstudio />,
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
                    <div className="skill-header">
                      <h4 className="skill-name">{skill.name}</h4>
                      <div className="skill-icon">{skill.icon}</div>
                    </div>
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
