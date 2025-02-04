import CardService from '@/app/components/CardService';
import { servicesData } from '@/app/constants/services.data';

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
            <CardService
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
