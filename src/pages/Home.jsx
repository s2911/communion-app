import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';

function Home() {
  return (
    <div className="home">
      <Header />
      <Hero />
      <div className="content">
        <h2>Welcome to the Communion App</h2>
        <p>Connecting people of all faiths through events and community support.</p>
      </div>
    </div>
  );
}

export default Home;