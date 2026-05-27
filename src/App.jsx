import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import BackgroundParticles from './components/BackgroundParticles';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import OurStory from './sections/OurStory';
import Details from './sections/Details';
import Countdown from './sections/Countdown';
import Gallery from './sections/Gallery';
import Invitation from './sections/Invitation';
import RSVP from './sections/RSVP';
import Footer from './sections/Footer';
import './index.css';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-navy min-h-screen text-white font-sans selection:bg-gold/30 selection:text-white">
        <BackgroundParticles />
        <Navbar />
        
        <main className="relative z-10">
          <Hero />
          <OurStory />
          <Invitation />
          <Details />
          <Countdown />
          <Gallery />
          <RSVP />
        </main>
        
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
