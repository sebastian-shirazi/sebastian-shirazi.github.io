import React, { useEffect, useRef, useState } from 'react';
import { FileText, Music } from 'lucide-react';

export function About() {
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
    <section id="about" className="py-32 px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-sm uppercase tracking-wider text-muted-foreground mb-16 transition-all duration-700 text-center md:text-left ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          <div
            className={`space-y-6 transition-all duration-700 delay-100 text-center md:text-left ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Who I Am</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a passionate software developer with a love for AI technologies. When I'm not coding,
                you can find me playing soccer, listening to music, or getting a lift in at the gym.
                I love learning about how technology shapes society.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Background</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                With a strong education background in data structures, software design principles, and
                computational theory, I bring analytical thinking and design skills to every project.
                I'm a big proponent of clean, simplistic code that is not only functional but elegant.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Interests</h3>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I love staying active through weightlifting after growing up playing various sports.
                I'm also into all things music—classical, dad rock, and especially rap. This stems
                from playing piano and violin as I was growing up!
              </p>
            </div>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a
                href="/Sebastian-Shirazi-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                View Resume
              </a>
              <a
                href="https://open.spotify.com/user/vividphoenix1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium"
              >
                <Music className="w-4 h-4" />
                My Spotify
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-muted rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Education</h3>
                <div className="space-y-1">
                  <p className="font-semibold text-lg">University of Virginia</p>
                  <p className="text-muted-foreground">B.S. in Computer Science</p>
                  <p className="text-muted-foreground">Minor in Data Science</p>
                  <p className="text-muted-foreground">Minor in Engineering Business</p>
                </div>
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Experience Highlights</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">3+ years Python, Java, and C coding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">Full Stack web & mobile application development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">Cybersecurity internship on Threat Detection team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-foreground rounded-full mt-2.5 shrink-0" />
                    <span className="text-muted-foreground">LLM Research Assistant at UVA with GPT-4o</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
