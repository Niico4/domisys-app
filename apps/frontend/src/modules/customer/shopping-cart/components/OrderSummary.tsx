import { Card } from '@heroui/card';
import { FC } from 'react';

interface Props {
  totalItems: number;
  subtotal: number;
  total: number;
  shoppingCost: number;
}

const OrderSummary: FC<Props> = ({
  shoppingCost,
  subtotal,
  total,
  totalItems,
}) => {
  return (
    <Card
      className="bg-white/10 border border-white/15 p-5 backdrop-blur-sm"
      radius="sm"
    >
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-4xl font-semibold text-custom-neutral opacity-80">
          Resumen del pedido
        </h2>
        <span className="text-muted">({totalItems} productos)</span>
      </div>

      <div className="flex flex-col gap-3 mb-6">
        <div className="flex justify-between text-lg">
          <p>Subtotal</p>
          <span className="text-custom-neutral">
            ${subtotal.toLocaleString()}
          </span>
        </div>

        <div className="flex justify-between text-lg">
          <p>Envío</p>
          <span className="text-custom-neutral">
            ${shoppingCost.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex justify-between font-bold border-t border-gray-400/30 pt-2 text-3xl">
        <p className="text-light opacity-85">Total</p>
        <span className="text-primary">${total.toLocaleString()}</span>
      </div>
    </Card>
  );
};

export default OrderSummary;
