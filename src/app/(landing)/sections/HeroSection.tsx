import React from 'react';
import { Button } from '@heroui/react';
import Image from 'next/image';

import heroImage from '@/../public/hero.webp';

const HeroSection = () => {
  return (
    <>
      <div className="hero-bg" />
      <section className="relative flex-col-center gap-8">
        <article className="w-4/5 flex-col-center">
          <h1 className="text-gradient-title text-center py-4">
            ¡Haz tus pedidos en segundos con DomiSys!
          </h1>
          <p className="w-1/2 text-center text-lg text-gray-300/90">
            Descubre lo fácil que es ordenar lo que necesitas y recibirlo en la
            puerta de tu casa. ¡Explora productos y realiza pedidos de manera
            rápida y segura!
          </p>
        </article>

        <article className="flex-center gap-4">
          <Button variant="flat" color="primary" className="text-[#c781ff]">
            Sobre Nosotros
          </Button>
          <Button variant="shadow" color="secondary">
            Iniciar Sesión
          </Button>
        </article>

        <figure
          className="w-4/5 mt-8 opacity-95"
          style={{
            filter: 'drop-shadow(4px 4px 8px rgba(255, 255, 255, .5))',
          }}
        >
          <Image
            src={heroImage}
            alt="Dashboard Admin Image"
            width={0}
            height={0}
            className="size-full"
            loading="lazy"
          />
        </figure>
      </section>
    </>
  );
};

export default HeroSection;
