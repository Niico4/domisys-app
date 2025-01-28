import { IconClipboardList, IconUserCheck } from '@tabler/icons-react';

import secureImage from '@/../public/secure-img.webp';
import inventoryImage from '@/../public/man-with-boxes.webp';
import webAnalytics from '@/../public/web-analytics.webp';
import onlineShopping from '@/../public/online-shopping.webp';

export const servicesData = [
  [
    {
      title: 'Gestión de Pedidos Optimizada',
      description:
        'Un panel interactivo que simplifica la creación, seguimiento y cierre de órdenes.',
      icon: IconClipboardList,
      color: '#BFA0D8',
    },
    {
      title: 'Seguridad de Datos Garantizada',
      description:
        'Tus datos están protegidos con encriptación avanzada y protocolos de seguridad. Priorizamos la confidencialidad y privacidad de tu información.',
      image: secureImage,
    },
  ],
  [
    {
      title: 'Estadísticas en Tiempo Real',
      description:
        'Gráficos claros y reportes detallados para analizar el rendimiento de tu negocio.',
      image: webAnalytics,
    },
    {
      title: 'Control Total del Inventario',
      description:
        'Monitorea tus productos, verifica el stock y optimiza tu inventario en tiempo real.',
      image: inventoryImage,
    },
  ],
  [
    {
      title: 'Historial Detallado',
      description:
        'Accede a un historial completo de todos los pedidos realizados, entregas y productos gestionados. Ideal para auditorías y análisis.',
      image: onlineShopping,
    },
    {
      title: 'Roles Personalizados',
      description:
        'Acceso único para admins, repartidores y clientes con herramientas adaptadas a sus necesidades.',
      icon: IconUserCheck,
      color: '#A7C1D9',
    },
  ],
];
