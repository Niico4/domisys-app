import {
  IconReceipt,
  IconPackage,
  IconUser,
  IconTruckDelivery,
} from '@tabler/icons-react';

import { OrderCardProps } from './OrderCard';

const OrderDetails = ({ order }: OrderCardProps) => {
  return (
    <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
      <h4 className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        <IconReceipt stroke={1.5} />
        Detalles del pedido
      </h4>

      <ul className="flex flex-col justify-center gap-3">
        {order.products.map((product, index) => (
          <li key={index} className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-gray-700 flex items-center justify-center">
                <IconPackage size={18} stroke={1.5} />
              </div>
              <div>
                <p className="text-sm font-medium text-custom-neutral opacity-90">
                  {product.productName}
                </p>
                <p className="text-xs text-muted">
                  x{product.quantity} • ${product.price.toLocaleString()} c/u
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-custom-neutral opacity-85">
              ${(product.price * product.quantity).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>

      {/* Info repartidor */}
      {order.delivery && (
        <div className="mt-4 pt-4 border-t border-gray-700">
          <h4 className="flex items-center gap-2 text-sm font-medium text-gray-300 mb-3">
            <IconUser stroke={1.5} />
            Información de entrega
          </h4>
          <div className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-secondary-500/10 text-secondary-300 flex items-center justify-center">
              <IconTruckDelivery size={20} stroke={1.5} />
            </div>
            <div className="flex flex-col gap-1">
              <p className="font-medium text-custom-neutral opacity-90">
                {order.delivery.name} {order.delivery.lastName}
              </p>
              <p className="text-xs text-muted">
                {order.delivery.phoneNumber} • {order.delivery.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
