import { useState } from 'react';

function CosmicTransmitter({ className }) {
  const [riddleAnswer, setRiddleAnswer] = useState('');
  const [isTransmitting, setIsTransmitting] = useState(false);

  const handleTransmit = (e) => {
    e.preventDefault();
    setIsTransmitting(true);
    setTimeout(() => {
      if (riddleAnswer.toLowerCase() === 'mars') {
        alert('Transmission successful! Your message has reached the cosmos.');
      } else {
        alert('Incorrect alignment. The stars whisper: try again.');
      }
      setIsTransmitting(false);
    }, 1500); // Simulate transmission delay
  };

  return (
    <section className={`py-16 px-4 text-center bg-gradient-to-b from-black to-gray-900 ${className}`}>
      <h2 className="text-4xl text-green-400 font-bold mb-8 animate-glow">Cosmic Message Transmitter</h2>
      <p className="text-gray-300 mb-6">Send a signal to the universe. Align the stars to proceed.</p>
      <form onSubmit={handleTransmit} className="max-w-lg mx-auto space-y-6">
        <input
          type="text"
          placeholder="Your Earthly Designation (Name)"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 placeholder-gray-500"
        />
        <input
          type="email"
          placeholder="Galactic Coordinates (Email)"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 placeholder-gray-500"
        />
        <textarea
          placeholder="Message to the Stars"
          required
          className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300 placeholder-gray-500"
        />
        <div className="text-left">
          <p className="text-gray-300 mb-2">
            Riddle: "I’m the fourth rock from the sun, red and dusty, where rovers run. What am I?"
          </p>
          <input
            type="text"
            placeholder="Your Answer"
            value={riddleAnswer}
            onChange={(e) => setRiddleAnswer(e.target.value)}
            required
            className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition-all duration-300"
          />
        </div>
        <button
          type="submit"
          disabled={isTransmitting}
          className={`px-6 py-3 rounded-lg text-black transition-all duration-300 ${
            isTransmitting
              ? 'bg-gray-600 animate-pulse'
              : 'bg-green-400 hover:bg-green-500 animate-bounce'
          }`}
        >
          {isTransmitting ? 'Transmitting...' : 'Send to the Cosmos'}
        </button>
      </form>
      <div className="mt-8 space-x-4">
        <a href="https://github.com/username" className="text-green-400 hover:underline">
          Galactic Hub (GitHub)
        </a>
        <a href="https://linkedin.com/in/username" className="text-green-400 hover:underline">
          Interstellar Network (LinkedIn)
        </a>
      </div>
    </section>
  );
}

export default CosmicTransmitter;