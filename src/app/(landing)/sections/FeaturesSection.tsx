import React from 'react';
import Image from 'next/image';
import { Card, CardBody, CardFooter } from '@heroui/react';
import { IconAppWindowFilled } from '@tabler/icons-react';

import shoppinCartImage from '@/../public/shopping-cart.webp';
import CardShadow from '@/app/components/CardShadow';
import StepperOrderState from '@/app/components/StepperOrderState';
import { featureCardInfo } from '@/app/constants/constants';

const FeaturesSection = () => {
  return (
    <section className="flex-col-center gap-16 mt-10">
      <div className="flex-col-center gap-10">
        <article className="flex-col-center gap-5">
          <h2 className="text-5xl font-semibold text-gray-200">
            Sigue cada paso de tu pedido
          </h2>
          <p className="w-4/5 text-center text-lg text-gray-300/90">
            Cada etapa del proceso es visible para ti, asegurando que estés
            siempre al tanto del estado de tu compra.
          </p>
        </article>

        <article className="w-full">
          <StepperOrderState />
        </article>
      </div>

      <article className="grid grid-cols-2 place-content-center w-4/5 gap-8 mx-auto">
        {featureCardInfo.map(({ title, description, color, icon }, index) => (
          <CardShadow
            key={index}
            title={title}
            description={description}
            colorIcon={color}
            icon={icon}
          />
        ))}

        <Card
          className="flex-row bg-black/10 border border-gray-400/30 p-4"
          style={{
            boxShadow: '0px 0px 8px 3px rgba(182, 182, 182, 0.2)',
            gridColumn: '1 / -1',
          }}
        >
          <CardBody className="flex flex-col items-start mt-10 gap-5">
            <div className="flex flex-col gap-4">
              <div
                className="bg-[#ff16d4] size-12 flex-center rounded-lg"
                style={{ boxShadow: '0px 0px 12px 2px #ff16d4' }}
              >
                <IconAppWindowFilled stroke={1} color="#fff" size={32} />
              </div>
              <h3 className="text-gray-300 text-4xl font-medium">
                Interfaz Intuitiva
              </h3>
            </div>

            <p className="text-gray-400 text-sm leading-6">
              Navegar por nuestra plataforma es sencillo gracias a un diseño
              enfocado en la experiencia del usuario. Integramos gráficos
              interactivos directamente en las vistas, lo que facilita el
              análisis de datos y la toma de decisiones rápidas. Todo al alcance
              de un clic, sin complicaciones
            </p>
          </CardBody>
          <CardFooter>
            <figure className="w-4/5 mx-auto">
              <Image
                src={shoppinCartImage}
                alt="Vista del Carrito de Compras"
                width={0}
                height={0}
                className="size-full"
                loading="lazy"
              />
            </figure>
          </CardFooter>
        </Card>
      </article>
    </section>
  );
};

export default FeaturesSection;
