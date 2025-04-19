import { Navigate } from 'react-router-dom';

import { paths } from '@/constants/routerPaths';
import useAuth from '@/hooks/useAuth';

type Props = {
  children: React.ReactNode;
  isDelivery?: boolean;
};

export default function ProtectedRoute({
  children,
  isDelivery: requireDelivery,
}: Props) {
  const { user } = useAuth();

  // Usuario no autenticado
  if (!user) {
    return <Navigate to={`/${paths.authRoot}/${paths.signIn}`} replace />;
  }

  // Si la ruta es para repartidores pero el usuario no lo es
  if (requireDelivery && !user.isDelivery) {
    return <Navigate to={paths.root} replace />;
  }

  // Si la ruta es para clientes pero el usuario es repartidor
  if (!requireDelivery && user.isDelivery) {
    return <Navigate to={`/${paths.deliveryRoot}/${paths.home}`} replace />;
  }

  return <>{children}</>;
}
