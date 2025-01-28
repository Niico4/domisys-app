import React from 'react';
import Image from 'next/image';

import { brands } from '@/app/constants/brands.data';

const ProductBrandsSection = () => {
  const duplicatedBrands = [...brands, ...brands];
  return (
    <section className="relative overflow-hidden py-10 bg-landing">
      <ul className="flex-center slider-brands">
        <div className="flex-center gap-10">
          {duplicatedBrands.map(({ id, image }, index) => (
            <li key={index}>
              <Image
                src={image}
                alt={`logo de ${id}`}
                width={0}
                height={0}
                className="size-3/5 object-cover"
                loading="lazy"
              />
            </li>
          ))}
        </div>
      </ul>
    </section>
  );
};

export default ProductBrandsSection;
