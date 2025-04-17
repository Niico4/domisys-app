import { ReactElement } from 'react';
import { IconHome, IconUser, Icon, IconHistory } from '@tabler/icons-react';

import { paths } from '@/constants/routerPaths';
import HomePage from '@/pages/delivery';
import ProfilePage from '@/pages/customer/Profile';
import HistoryPage from '@/pages/delivery/History';

interface DeliveryRouteType {
  path: string;
  label: string;
  icon: Icon;
  badge?: boolean;
  element: ReactElement;
}

export const deliveryRoutes: DeliveryRouteType[] = [
  {
    path: paths.home,
    icon: IconHome,
    label: 'Inicio',
    element: <HomePage />,
  },
  {
    path: paths.history,
    icon: IconHistory,
    label: 'Historial',
    badge: true,
    element: <HistoryPage />,
  },
  {
    path: paths.profile,
    icon: IconUser,
    label: 'Perfil',
    element: <ProfilePage />,
  },
];
