import React from 'react';
import Image from 'next/image';
import { Tooltip, Button } from '@heroui/react';

import ordersImage from '@/../public/orders.webp';
import { socials } from '@/app/constants/constants';

const AboutUsSection = () => {
  return (
    <>
      <div className="hero-bg" />
      <section className="relative w-4/5 mx-auto my-10">
        <div className="flex-center gap-20">
          <article className="flex flex-col items-start w-2/3 gap-4">
            <h1 className="text-gradient-title text-center py-4">
              Sobre Domisys
            </h1>
            <p className="text-gray-300/80 text-lg">
              Domisys es la herramienta definitiva diseñada para transformar la
              manera en que gestionas pedidos y domicilios. Nos especializamos
              en brindar soluciones tecnológicas intuitivas y eficientes que
              simplifican procesos complejos, ahorran tiempo y mejoran la
              productividad de tu negocio.
            </p>
            <p className="text-gray-300/80 text-lg">
              Nuestro enfoque está en conectar a clientes, repartidores y
              administradores de manera fluida a través de un sistema que
              combina funcionalidad avanzada con una interfaz moderna y fácil de
              usar.
            </p>

            <ul className="flex-center gap-2">
              {socials.map(({ label, link, icon: Icon }, index) => (
                <Tooltip key={index} content={label} showArrow>
                  <a href={link}>
                    <Button
                      isIconOnly
                      variant="light"
                      size="lg"
                      startContent={<Icon color="#ECECEC" />}
                    />
                  </a>
                </Tooltip>
              ))}
            </ul>
          </article>
          <figure
            className="w-4/5 opacity-95"
            style={{
              filter: 'drop-shadow(4px 4px 8px rgba(255, 255, 255, .5))',
            }}
          >
            <Image
              src={ordersImage}
              alt="Orders Image"
              width={0}
              height={0}
              className="size-full"
              loading="lazy"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default AboutUsSection;
