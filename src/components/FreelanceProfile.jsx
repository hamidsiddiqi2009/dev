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
          {[
            'React.js',
            'Node.js',
            'Penetration Testing',
            'Secure APIs',
            '🔒 Secure Coding',
            '💻 React.js',
            '🛡️ Penetration Testing',
            '🌐 Network Security',
            '🐍 Python',
            'Javascript',
            'Wordpress',
            'Django',
            'Flask',
            'Graphic Designing',
            'PHP',
            'Web Scraping',
          ].map((skill) => (
            <li
              key={skill}
              className="bg-green-400 text-black px-3 py-1 rounded-full text-sm font-semibold hover:scale-105 transition-transform duration-300"
            >
              {skill}
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-all duration-300 animate-pulse"
          >
            Hire Me
          </a>
          {/* Fiverr Profile Widget */}
          <a
            href="https://www.fiverr.com/hamidsiddiqii" // Replace with your Fiverr profile URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gray-900 text-green-400 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Fiverr logo simplified as an SVG */}
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2-6h-1v-4H7v4H6v-6h1v-1c0-1.654 1.346-3 3-3h1v2h-1c-.552 0-1 .448-1 1v1h2l-.5 2H10v4zm6-4h-2v2h2v2h-3v-6h3v2z" />
              </svg>
              Hire me on fiverr
            </span>
          </a>
        </div>
        <div className="inline-block px-3 py-6" id="pph-hireme"></div>
      </div>
    </section>
  );
}

export default FreelanceProfile;