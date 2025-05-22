import React from 'react';

const Hero = () => {
  // Calculate height to fill viewport below navbar (assuming navbar height ~64px)
  // Adjust '64px' if your navbar height is different.
  // Or, for simplicity if navbar isn't fixed/sticky, just use min-h-screen
  // If Navbar *is* sticky (like above), this needs careful handling.
  // A simpler approach: Make this section occupy full screen height, and let the content inside center vertically.
  return (
    <section
      id="hero"
      // This makes the section itself take full viewport height
      className="min-h-screen flex items-center justify-center text-center bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 px-4"
    >
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-blue-300 animate-fade-in-down">
          Explore the World of Economics
        </h1>
        <p className="text-lg md:text-xl text-gray-300 animate-fade-in-up">
          Understand the fundamental theories that shape economies and influence global events.
        </p>
        
        <a href="#introduction" className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300">
          Learn More
        </a>
      </div>
    </section>
  );
};




export default Hero;