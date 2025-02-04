import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Card, CardBody, CardFooter } from '@heroui/react';
import { Icon } from '@tabler/icons-react';

const cardStyles = {
  boxShadow: '0px 0px 12px 2px rgba(255, 255, 255, 0.2)',
};

const CardService: FC<{
  title: string;
  description: string;
  image?: StaticImageData;
  color?: string;
  icon?: Icon;
}> = ({ title, description, image, color, icon: Icon }) => (
  <Card
    className={`w-2/5 bg-gray-950/30 p-10 flex border border-gray-400/30 overflow-hidden hover:border-purple-500/40 transition-all ${
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
            className="size-full hover:scale-110 transition-all"
            loading="lazy"
          />
        </figure>
      </CardFooter>
    )}
  </Card>
);

export default CardService;
