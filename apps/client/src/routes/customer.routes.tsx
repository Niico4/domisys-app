import { ReactElement } from 'react';
import {
  IconHome,
  IconShoppingCart,
  IconBoxSeam,
  IconUser,
  Icon,
} from '@tabler/icons-react';

import { paths } from '@/constants/routerPaths';
import HomePage from '@/pages/customer';
import OrdersPage from '@/pages/customer/Orders';
import ProfilePage from '@/pages/customer/Profile';
import ShoppingCartPage from '@/pages/customer/ShoppingCart';

interface CustomerRouteType {
  path: string;
  label: string;
  icon: Icon;
  badge?: boolean;
  element: ReactElement;
}

export const customerRoutes: CustomerRouteType[] = [
  {
    path: paths.root,
    icon: IconHome,
    label: 'Inicio',
    element: <HomePage />,
  },
  {
    path: paths.shoppingCart,
    icon: IconShoppingCart,
    label: 'Carrito',
    badge: true,
    element: <ShoppingCartPage />,
  },
  {
    path: paths.orders,
    icon: IconBoxSeam,
    label: 'Pedidos',
    element: <OrdersPage />,
  },
  {
    path: paths.profile,
    icon: IconUser,
    label: 'Perfil',
    element: <ProfilePage />,
  },
];
