import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import photo from './photo.jpg'
import { TextPlugin } from 'gsap/TextPlugin';
gsap.registerPlugin(TextPlugin);

const Hero = ({ className }) => {
  const consoleRef = useRef(null);

  useEffect(() => {
    const messages = [
      "> Initiating secure connection...",
      "> Welcome to my digital fortress.",
    ];

    let tl = gsap.timeline();
    messages.forEach((msg, i) => {
      tl.to(consoleRef.current, {
        duration: 0.5,
        text: msg,
        delay: i * 2,
        ease: 'none',
      });
    });
  }, []);

  return (
    <header className={`h-screen flex items-center justify-center text-center ${className}`}>
      <div className="relative z-10">
        {/* Profile Photo Container */}
        <div className="mb-6 flex justify-center">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-800 border-2 border-green-400">
            {/* Add your image here */}
            <img 
              src={photo} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl text-green-400 font-bold tracking-wider animate-glow">
          Hamid Siddiqi
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300">
          Web Developer | Graphic Designer |Cybersecurity Enthusiast
        </p>
        <div
          ref={consoleRef}
          className="mt-6 p-4 bg-black bg-opacity-80 text-green-400 rounded-lg text-sm md:text-base"
        >
          {/* The text will be updated here */}
        </div>
        <a
          href="#portfolio"
          className="mt-8 inline-block px-6 py-3 bg-green-400 text-black rounded-lg hover:bg-green-500 transition-all duration-300"
        >
          Explore My Work
        </a>
      </div>
    </header>
  );
};

export default Hero;