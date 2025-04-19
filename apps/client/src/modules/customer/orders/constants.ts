import { Order } from '@/types/order';

export const statusAccentColors: Record<Order['status'], string> = {
  pending: 'bg-amber-600',
  preparing: 'bg-blue-600',
  delivering: 'bg-purple-600',
  delivered: 'bg-emerald-600',
  cancelled: 'bg-rose-600',
};

export const statusColors: Record<
  Order['status'],
  'warning' | 'primary' | 'secondary' | 'success' | 'danger'
> = {
  pending: 'warning',
  preparing: 'primary',
  delivering: 'secondary',
  delivered: 'success',
  cancelled: 'danger',
};

export const statusLabels: Record<Order['status'], string> = {
  pending: 'Pendiente',
  preparing: 'Preparando',
  delivering: 'En camino',
  delivered: 'Entregado',
  cancelled: 'Cancelado',
};
