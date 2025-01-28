import React from 'react';
import { Metadata } from 'next';

import AboutUsSection from '../about-us/sections/AboutUsSection';
import ServicesSection from '../about-us/sections/ServicesSection';

import ProductBrandsSection from './sections/ProductBrandsSection';

export const metadata: Metadata = {
  title: 'Sobre Nosotros | DomiSys',
  description:
    'Conoce DomiSys, la plataforma ideal para gestionar pedidos, inventarios y analíticas de tu negocio de forma eficiente. Optimiza tus procesos, ahorra tiempo y mejora la productividad. Descubre cómo transformamos la gestión de tu empresa.',
};

const AboutUsPage = () => {
  return (
    <main className="flex-col-center py-20 mx-auto bg-about-section-gradient">
      <div className="flex-col-center gap-32">
        <AboutUsSection />
        <ProductBrandsSection />
        <ServicesSection />
      </div>
    </main>
  );
};

export default AboutUsPage;
