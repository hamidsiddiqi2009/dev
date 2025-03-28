function About({ className }) {
    return (
      <section className={`py-16 px-4 text-center ${className}`}>
        <h2 className="text-4xl text-green-400 font-bold mb-8 animate-glow">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg">
          I'm a web developer with a passion for building secure, futuristic applications and a
          cybersecurity enthusiast dedicated to protecting the digital realm.
        </p>
        <ul className="mt-8 flex max-w-2x1 mx-auto flex-wrap justify-center gap-6">
          {['🔒 Secure Coding', '💻 React.js', '🛡️ Penetration Testing', '🌐 Network Security', '🐍 Python', 'Javascript', 'Wordpress', 'Django', 'Flask', 'Graphic Designing', 'PHP', 'Web Scraping'].map(
            (skill) => (
              <li
                key={skill}
                className="bg-gray-800 p-4 rounded-lg text-green-400 hover:scale-105 transition-transform duration-300"
              >
                {skill}
              </li>
            )
          )}
        </ul>
      </section>
    );
  }
  
  export default About;