import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardBody, CardFooter } from '@heroui/react';
import { Icon } from '@tabler/icons-react';

import { servicesData } from '@/app/constants/services.data';

const cardStyles = {
  boxShadow: '0px 0px 12px 2px rgba(255, 255, 255, 0.2)',
};

const ServiceCard: FC<{
  title: string;
  description: string;
  image?: StaticImageData;
  color?: string;
  icon?: Icon;
}> = ({ title, description, image, color, icon: Icon }) => (
  <Card
    className={`w-2/5 bg-gray-950/30 p-10 flex border border-gray-400/30 hover:scale-105 hover:border-purple-500/40 transition-all ${
      image
        ? 'flex-row items-center px-14 py-0 w-full'
        : 'flex-col justify-center'
    }`}
    style={cardStyles}
  >
    <CardBody className="flex flex-col items-start gap-5">
      {Icon && (
        <div
          className="flex-center size-12 rounded-lg"
          style={{
            backgroundColor: color,
            boxShadow: `0px 0px 12px 2px ${color}`,
          }}
        >
          <Icon stroke={1} color="black" size={32} />
        </div>
      )}
      <h3 className="text-gray-300 text-4xl font-medium">{title}</h3>
      <p className="text-gray-300/80 text-medium leading-7">{description}</p>
    </CardBody>
    {image && (
      <CardFooter>
        <figure className="w-4/5 mx-auto">
          <Image
            src={image}
            alt={`Imagen de ${image}`}
            width={0}
            height={0}
            className="size-full"
            loading="lazy"
          />
        </figure>
      </CardFooter>
    )}
  </Card>
);

const ServicesSection = () => (
  <section className="flex-col-center w-4/5 mx-auto gap-10">
    <div className="flex-center bg-gray-100/10 px-8 py-5 rounded-xl border border-gray-400/30">
      <h2
        className="text-6xl font-bold text-gray-100"
        style={{ filter: 'drop-shadow(2px 5px 2px #6a00ff)' }}
      >
        ¿Qué ofrecemos?
      </h2>
    </div>

    <article className="flex flex-col gap-12 mt-10">
      {servicesData.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-12">
          {row.map(({ title, description, color, icon, image }, cardIndex) => (
            <ServiceCard
              key={cardIndex}
              title={title}
              description={description}
              color={color}
              icon={icon}
              image={image}
            />
          ))}
        </div>
      ))}
    </article>
  </section>
);

export default ServicesSection;
