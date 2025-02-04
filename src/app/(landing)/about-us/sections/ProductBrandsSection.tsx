import Image from 'next/image';

import { brands } from '@/app/constants/brands.data';

const ProductBrandsSection = () => {
  return (
    <section className="relative w-4/5">
      <div className="flex-col-center gap-8">
        <h3 className="text-4xl font-medium text-gray-300/80">
          Trabajamos con las mejores marcas
        </h3>
        <article className="flex-center gap-10">
          {brands.map(({ id, image }, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-gray-900/30 to-gray-600/30 shadow-md shadow-black/60 p-4 rounded-md opacity-90 hover:scale-105 hover:opacity-100 hover:shadow-purple-400/20 transition-all"
            >
              <Image
                src={image}
                alt={`logo de ${id}`}
                width={200}
                height={200}
                className="aspect-square object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </article>
      </div>
    </section>
  );
};
export default ProductBrandsSection;
