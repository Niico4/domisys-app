import { IconPackage, IconCurrencyDollar } from '@tabler/icons-react';

import { OrderCardProps } from './OrderCard';

const OrderSummary = ({ order }: OrderCardProps) => {
  return (
    <div className="grid grid-cols-2 gap-3 mb-4">
      <div className="bg-gray-700/50 p-2 rounded-lg">
        <div className="flex items-center justify-center gap-1 text-muted">
          <IconPackage stroke={1.75} size={18} />
          <span className="text-sm font-medium">Productos</span>
        </div>
        <p className="text-custom-neutral text-center text-lg font-medium opacity-85">
          {order.products.length}{' '}
          {order.products.length === 1 ? 'artículo' : 'artículos'}
        </p>
      </div>

      <div className="bg-gray-700/50 p-2 rounded-lg">
        <div className="flex items-center justify-center gap-1 text-muted">
          <IconCurrencyDollar stroke={1.75} size={18} />
          <span className="text-sm font-medium">Total</span>
        </div>
        <p className="text-custom-neutral text-center text-lg font-medium opacity-85">
          ${order.totalAmount.toLocaleString()}
        </p>
      </div>
    </div>
  );
};

export default OrderSummary;
