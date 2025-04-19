import { useState } from 'react';
import { Input } from '@heroui/input';
import { Chip } from '@heroui/chip';
import { IconSearch } from '@tabler/icons-react';
import ProductCard from '@modules/customer/home/components/ProductCard';

import { productsMock } from '@/constants/mock/mock-products';
import useCart from '@/hooks/useCart';

const categoryProducts = [
  'Todos',
  'Frutas y Verduras',
  'Lácteos',
  'Panadería',
  'Bebidas',
  'Limpieza',
];

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const filteredProducts = productsMock.filter((product) => {
    const categoryMatch =
      selectedCategory === 'Todos' || product.category === selectedCategory;

    const searchMatch =
      product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatch && searchMatch;
  });
  return (
    <section className="flex-col-center gap-12">
      <article className="flex flex-col items-center justify-center w-1/2 gap-5">
        <Input
          startContent={<IconSearch stroke={1.5} />}
          radius="sm"
          placeholder="Buscar productos..."
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <div className="flex items-center gap-3">
          {categoryProducts.map((category, index) => (
            <Chip
              key={index}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? 'solid' : 'bordered'}
              color={selectedCategory === category ? 'primary' : 'default'}
              className="cursor-pointer"
            >
              {category}
            </Chip>
          ))}
        </div>
      </article>
      <article className="flex items-center justify-center gap-8 flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(
            ({ image, category, measure, price, productName, id, stock }) => (
              <ProductCard
                key={String(id)}
                category={category}
                measure={measure}
                price={price}
                image={image}
                productName={productName}
                onAddToCart={() =>
                  addToCart({
                    id,
                    image,
                    category,
                    measure,
                    price,
                    productName,
                    stock,
                  })
                }
              />
            ),
          )
        ) : (
          <p className="text-center text-lg text-gray-500">
            No se encontraron resultados
          </p>
        )}
      </article>
    </section>
  );
};

export default HomePage;
