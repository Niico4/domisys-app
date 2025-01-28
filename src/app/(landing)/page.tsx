import React from 'react';

import FeaturesSection from './sections/FeaturesSection';
import HeroSection from './sections/HeroSection';

const HomePage = () => {
  return (
    <main className="w-4/5 py-20 mx-auto">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
};

export default HomePage;
