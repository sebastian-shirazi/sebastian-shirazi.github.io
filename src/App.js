import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navigation } from './components/Navigation';
import { ScrollIndicator } from './components/ScrollIndicator';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <main className="min-h-screen">
        <Navigation />
        <ScrollIndicator />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Connect />
        <Footer />
      </main>
    </ThemeProvider>
  );
}

export default App;
