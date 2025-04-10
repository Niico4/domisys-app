import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconDownload } from '@tabler/icons-react';
import { Button } from '@heroui/button';

import { statusAccentColors } from '../constants';

import OrderHeader from './OrderHeader';
import OrderSummary from './OrderSummary';
import OrderDetails from './OrderDetails';

import { Order } from '@/types/order';

export interface OrderCardProps {
  order: Order;
}

const OrderCard = ({ order }: OrderCardProps) => {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative w-96 overflow-hidden rounded-lg border border-gray-700/70 bg-gradient-to-br from-gray-800/50 to-gray-900/50 shadow-lg"
    >
      <div className="p-5">
        <OrderHeader
          order={order}
          isDetailsVisible={isDetailsVisible}
          setIsDetailsVisible={setIsDetailsVisible}
        />

        <OrderSummary order={order} />

        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {isDetailsVisible && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <OrderDetails order={order} />
              </motion.div>
            )}
          </AnimatePresence>

          <Button
            color="primary"
            startContent={<IconDownload stroke={1.5} />}
            radius="sm"
          >
            Descargar factura
          </Button>
        </div>
      </div>

      <div
        className={`absolute top-0 left-0 w-1 h-full ${statusAccentColors[order.status]}`}
      />
    </motion.div>
  );
};

export default OrderCard;
