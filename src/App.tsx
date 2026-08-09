import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import LearningJourney from './components/sections/LearningJourney';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import GithubStats from './components/sections/GithubStats';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    
    lenis.on('scroll', ScrollTrigger.update);
    
    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };
    
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(ticker);
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <LearningJourney />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <GithubStats />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
