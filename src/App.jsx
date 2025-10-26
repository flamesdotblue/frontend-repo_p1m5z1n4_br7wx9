import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuBar from './components/MenuBar';
import About from './components/About';
import ContactFooter from './components/ContactFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-amber-200 selection:text-neutral-900">
      <Navbar />
      <main>
        <Hero />
        <MenuBar />
        <About />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;