import {
  IconBrandInstagram,
  IconBrandX,
  IconBuildingStore,
  IconCircleCheck,
  IconClipboardCheck,
  IconClockHour4,
  IconDeviceMobile,
  IconMailFilled,
  IconMoped,
} from '@tabler/icons-react';

export const paths = [
  { label: 'Inicio', path: '/' },
  { label: 'Quienes Somos', path: '/about-us' },
  { label: 'Ubicación', path: '/location' },
];

export const socials = [
  {
    icon: IconMailFilled,
    link: '#',
    label: 'Correo Electrónico',
  },
  {
    icon: IconBrandInstagram,
    link: '#',
    label: 'Instagram',
  },
  {
    icon: IconBrandX,
    link: '#',
    label: 'Twitter',
  },
];

export const steps = [
  {
    title: 'Pedido Recibido',
    description: 'Tu pedido ha sido confirmado y está siendo procesado',
    icon: IconClipboardCheck,
  },
  {
    title: 'Preparando',
    description: 'Tu pedido está en camino, solo unos minutos más',
    icon: IconClockHour4,
  },
  {
    title: 'En Entrega',
    description: 'Tu pedido está en ruta hacia tu ubicación',
    icon: IconMoped,
  },
  {
    title: 'Entregado',
    description: '¡Tu pedido ha llegado a su destino!',
    icon: IconCircleCheck,
  },
];

export const featureCardInfo = [
  {
    title: 'Explora una amplia variedad de productos',
    description:
      ' Catálogo completo y siempre actualizado de productos disponibles en tu almacén. Desde alimentos frescos, orgánicos hasta productos de uso diario, todo al alcance de tu mano.',
    icon: IconBuildingStore,
    color: '#5222fd',
  },
  {
    title: 'Experiencia Perfecta en Cualquier Dispositivo',
    description:
      ' Nuestra plataforma está diseñada para verse y funcionar perfectamente en cualquier dispositivo. Desde tu computadora hasta tu smartphone, tendrás acceso total en cualquier lugar y momento.',
    icon: IconDeviceMobile,
    color: '#0059ff',
  },
];
