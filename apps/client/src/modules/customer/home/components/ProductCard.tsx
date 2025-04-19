import { FC } from 'react';
import { Button } from '@heroui/button';
import { Card, CardHeader, CardBody } from '@heroui/card';
import { Chip } from '@heroui/chip';
import { IconShoppingCartPlus } from '@tabler/icons-react';

import { Product } from '../types/product';

interface CardProductProps extends Product {
  onAddToCart: () => void;
}

const ProductCard: FC<Omit<CardProductProps, 'stock' | 'id'>> = ({
  category,
  image,
  measure,
  price,
  productName,
  onAddToCart,
}) => {
  return (
    <Card
      radius="sm"
      className="group w-72 bg-white/[0.06] border border-white/[0.08] rounded-lg overflow-hidden shadow-sm shadow-slate-500/30 hover:border-white/20 transition-all"
    >
      <CardHeader className="relative p-0 w-72 h-48 overflow-hidden">
        <img
          src={image}
          alt={`Producto - ${productName}`}
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          loading="lazy"
        />
        <div className="absolute flex items-center justify-end p-2 top-0 w-full bg-black/20 backdrop-blur-sm">
          <Chip radius="sm" size="sm" variant="faded" color="secondary">
            {category}
          </Chip>
        </div>
      </CardHeader>

      <CardBody>
        <div className="flex justify-between items-start">
          <h3 className="text-light opacity-90 text-xl font-bold text-gray-900">
            {productName}
          </h3>
        </div>
        <p className="font-light mb-4 truncate opacity-85">({measure})</p>

        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-medium tracking-wider text-primary">
              ${price.toLocaleString()}
            </span>
          </div>
          <Button
            color="primary"
            size="sm"
            radius="sm"
            isIconOnly
            startContent={<IconShoppingCartPlus stroke={1.5} size={20} />}
            onPress={onAddToCart}
          />
        </div>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
