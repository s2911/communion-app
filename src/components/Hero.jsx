import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <div className="hero">
      <h1>Connecting People Across Faiths & Interests</h1>
      <p>Find and participate in events that bring communities together.</p>
      <Link to="/events" className="cta-button">Explore Events</Link>
    </div>
  );
}

export default Hero;
