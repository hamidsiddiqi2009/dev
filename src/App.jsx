import { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews'; // New
import FreelanceProfile from './components/FreelanceProfile'; // New
import CosmicTransmitter from './components/CosmicTransmitter';
import MatrixBackground from './components/MatrixBackground';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    gsap.fromTo(
      '.section',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <MatrixBackground />
      <div className="relative z-10">
        <Hero className="section" />
        <About className="section" />
        <Portfolio className="section" />
        <Reviews className="section" />
        <FreelanceProfile className="section" />
        {/* <CosmicTransmitter className="section" /> */}
      </div>
    </div>
  );
}

export default App;