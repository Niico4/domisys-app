import { FC } from 'react';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { NumberInput } from '@heroui/number-input';
import { IconTrash } from '@tabler/icons-react';

import { Product } from '../../home/types/product';

interface Props extends Omit<Product, 'measure' | 'image' | 'category'> {
  quantity: number;
  handleQuantityChange: (id: string, newQuantity: number) => void;
  removeFromCart: (productId: string) => void;
}

const ProductCartCard: FC<Props> = ({
  handleQuantityChange,
  id,
  price,
  productName,
  stock,
  quantity,
  removeFromCart,
}) => {
  const unitPrice = `$${price.toLocaleString()} c/u`;
  const totalPrice = `$${(price * quantity).toLocaleString()}`;

  const handleChange = (
    value: number | React.ChangeEvent<HTMLInputElement>,
  ) => {
    const numericValue =
      typeof value === 'number' ? value : Number(value.target.value);
    if (!isNaN(numericValue)) {
      const change = numericValue - quantity;
      handleQuantityChange(id, change);
    }
  };

  return (
    <Card className="grid grid-cols-[1.2fr_1fr_1fr] items-center gap-6 min-h-24 surface-glass p-4">
      <div className="flex flex-col">
        <h4 className="font-medium text-custom-neutral opacity-75 text-xl">
          {productName}
        </h4>
        <span className="text-custom-neutral font- opacity-85 text-sm">
          {unitPrice}
        </span>
      </div>

      <div className="flex- flex-center gap-3">
        <NumberInput
          value={quantity}
          min={1}
          max={stock}
          onChange={handleChange}
          isInvalid={quantity > stock}
          size="sm"
          radius="sm"
          variant="bordered"
          aria-label={`Cantidad de ${productName}`}
        />
      </div>

      <div className="flex justify-end items-center gap-4">
        <p className="text-custom-neutral">{totalPrice}</p>

        <Button
          onPress={() => removeFromCart(id)}
          color="danger"
          size="sm"
          radius="sm"
          variant="light"
          isIconOnly
          aria-label={`Eliminar ${productName} del carrito`}
          startContent={<IconTrash stroke={1.5} />}
        />
      </div>
    </Card>
  );
};

export default ProductCartCard;
