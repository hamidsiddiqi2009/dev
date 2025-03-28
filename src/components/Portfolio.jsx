function Portfolio({ className }) {
    const projects = [
      {
        title: 'Secure WebRTC App',
        desc: 'Encrypted real-time chat app with AES-256.',
        tech: 'React.js, Express, WebRTC, WebSockets',
        link: 'https://github.com/hamidsiddiqi2009/WebRTC',
      },
      {
        title: 'Penetration Testing Tool',
        desc: 'Python tool to simulate XSS and SQL injection.',
        tech: 'Python',
        link: 'https://github.com/username/pen-test-tool',
      },
    ];
  
    return (
      <section id="portfolio" className={`py-16 px-4 ${className}`}>
        <h2 className="text-4xl text-green-400 font-bold text-center mb-8 animate-glow">
          Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-[0_0_15px_#00ff99] transition-all duration-300"
            >
              <h3 className="text-2xl text-green-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <p className="text-sm text-gray-500">Tech: {project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                className="mt-4 inline-block text-green-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default Portfolio;