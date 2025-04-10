import { FC } from 'react';
import { Chip } from '@heroui/chip';
import { IconClock, IconChevronUp, IconChevronDown } from '@tabler/icons-react';
import { Button } from '@heroui/button';

import { statusColors, statusLabels } from '../constants';

import { formatDate } from '@/utils/format';
import { Order } from '@/types/order';

interface OrderCardProps {
  order: Order;
  isDetailsVisible: boolean;
  setIsDetailsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderHeader: FC<OrderCardProps> = ({
  order,
  isDetailsVisible,
  setIsDetailsVisible,
}) => {
  return (
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-xl font-semibold text-light opacity-85">
            {order.id}
          </h3>
          <Chip
            color={statusColors[order.status]}
            className={`${order.status === 'preparing' && 'bg-primary-700/30 text-primary-500'} ${order.status === 'delivering' && 'bg-secondary-800/30'}`}
            variant="flat"
            size="sm"
          >
            {statusLabels[order.status]}
          </Chip>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted">
          <IconClock stroke={1.5} size={18} />
          <span>{formatDate(order.created_at)}</span>
        </div>
      </div>

      <Button
        aria-expanded={isDetailsVisible}
        aria-controls={`order-details-${order.id}`}
        onPress={() => setIsDetailsVisible(!isDetailsVisible)}
        variant="light"
        isIconOnly
        startContent={
          isDetailsVisible ? (
            <IconChevronUp stroke={1.5} />
          ) : (
            <IconChevronDown stroke={1.5} />
          )
        }
      />
    </div>
  );
};

export default OrderHeader;
