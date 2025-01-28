import React from 'react';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { IconMapPin } from '@tabler/icons-react';

const LocationPage = () => {
  return (
    <main className="flex-col-center py-20 bg-about-section-gradient">
      <section className="w-4/5 mx-auto">
        <article className="flex-col-center gap-10">
          <div className="flex-center bg-gray-100/10 px-8 py-5 rounded-xl border border-gray-400/30">
            <h2
              className="text-6xl font-bold text-gray-100"
              style={{ filter: 'drop-shadow(2px 5px 2px #6a00ff)' }}
            >
              Nuestra Ubicación
            </h2>
          </div>

          <h3 className="text-center text-3xl font-medium text-gray-300/80">
            Nos encontramos estratégicamente ubicados en el corazón de Bogotá,
            brindando fácil acceso y la mejor experiencia para nuestros
            clientes.
          </h3>
        </article>

        <article className="w-full h-[600px] mt-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.6082463783405!2d-74.13306352406526!3d4.663732095311127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9c7c183b5caf%3A0xac7d29a15cf82ed1!2sHayuelos%20Centro%20Comercial!5e0!3m2!1ses!2sco!4v1738089294115!5m2!1ses!2sco"
            loading="lazy"
            className="size-full rounded-xl shadow-large shadow-black"
          />
        </article>

        <article className="flex-col-center gap-4">
          <p className="text-center text-xl mt-4 text-gray-400">
            Encuéntranos fácilmente en el mapa y ven a visitarnos. ¡Estamos aquí
            para brindarte el mejor servicio y productos de calidad!
          </p>

          <Button
            as={Link}
            href="https://maps.app.goo.gl/oGLvMpiMr8pW24JA6"
            target="_blank"
            rel="noopener noreferrer"
            startContent={<IconMapPin stroke={1.5} />}
            color="secondary"
            variant="shadow"
            size="lg"
          >
            Abrir en Google Maps
          </Button>
        </article>
      </section>
    </main>
  );
};

export default LocationPage;
