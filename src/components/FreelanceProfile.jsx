import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

function FreelanceProfile({ className }) {
  const profileRef = useRef(null);
  const availability = 'Available'; // Could be toggled via state or API

  useEffect(() => {
    gsap.fromTo(
      profileRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: profileRef.current, start: 'top 80%' },
      }
    );
  }, []);

  return (
    <section className={`py-16 px-4 text-center ${className}`}>
      <h2 className="text-4xl text-green-400 font-bold mb-8 animate-glow">
        Freelance Profile
      </h2>
      <div
        ref={profileRef}
        className="relative max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-[0_0_10px_#00ff99] overflow-hidden"
      >
        {/* Particle Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
        </div>

        <h3 className="text-2xl text-green-400 mb-4">Available for Hire</h3>
        <p className="text-gray-300 mb-6">
          Specializing in secure web development and cybersecurity solutions. Let’s build something
          futuristic and safe together!
        </p>
        <div className="mb-6">
          <span
            className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
              availability === 'Available' ? 'bg-green-400 text-black' : 'bg-red-400 text-white'
            }`}
          >
            {availability}
          </span>
        </div>
        <ul className="flex flex-wrap justify-center gap-4 mb-6">
          {['React.js', 'Node.js', 'Penetration Testing', 'Secure APIs'].map((skill) => (
            <li
              key={skill}
              className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-all duration-300 animate-pulse"
        >
          Hire Me
        </a>
        <div className="inline-block px-3 py-6" id="pph-hireme"></div>
        
      </div>
    </section>
  );
}

export default FreelanceProfile;