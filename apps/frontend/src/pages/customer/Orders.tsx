import { useMemo } from 'react';

import useOrders from '@/hooks/useOrders';
import OrderCard from '@/modules/customer/orders/components/OrderCard';

const OrdersPage = () => {
  const { orders } = useOrders();
  const sortedOrders = useMemo(() => {
    return orders
      .slice()
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
  }, [orders]);

  return (
    <section className="flex flex-col gap-12">
      <h1>Mis Pedidos</h1>
      {orders.length === 0 ? (
        <p className="text-gray-500">Aún no has realizado ningún pedido.</p>
      ) : (
        <article className="flex items-start justify-center flex-wrap gap-5">
          {sortedOrders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </article>
      )}
    </section>
  );
};

export default OrdersPage;
