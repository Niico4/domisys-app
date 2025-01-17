import React from 'react';

import Footer from '../layout/footer/Footer';
import NavBar from '../layout/navbar/NavBar';

import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';

const HomePage = () => {
  return (
    <div className="bg-landing">
      <NavBar />

      <main className="w-4/5 py-20 mx-auto">
        <HeroSection />
        <FeaturesSection />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
