import { Product } from '@/modules/customer/home/types/product';

export const productsMock: Omit<Product, 'quantity'>[] = [
  {
    id: '1',
    productName: 'Banano Criollo',
    category: 'Frutas y Verduras',
    measure: '1 lb',
    price: 2500,
    stock: 100,
    image: '/images/banano.webp',
  },
  {
    id: '2',
    productName: 'Aguacate Hass',
    category: 'Frutas y Verduras',
    measure: 'Unidad',
    price: 5000,
    stock: 1000,
    image: '/images/aguacate.webp',
  },
  {
    id: '3',
    productName: 'Papa Pastusa',
    category: 'Frutas y Verduras',
    measure: '1 kg',
    price: 3500,
    stock: 100,
    image: '/images/papas.webp',
  },
  {
    id: '4',
    productName: 'Leche Entera Alquería',
    category: 'Lácteos',
    measure: '1 L',
    price: 4200,
    stock: 10,
    image: '/images/leche.webp',
  },
  {
    id: '5',
    productName: 'Queso Campesino',
    category: 'Lácteos',
    measure: '250 g',
    price: 7800,
    stock: 100,
    image: '/images/queso.webp',
  },
  {
    id: '6',
    productName: 'Yogurt Griego',
    category: 'Lácteos',
    measure: '150 g',
    price: 3200,
    stock: 100,
    image: '/images/yogurt.webp',
  },
  {
    id: '7',
    productName: 'Pan de Yuca',
    category: 'Panadería',
    measure: '6 unidades',
    price: 6000,
    stock: 100,
    image: '/images/pan-de-yuca.webp',
  },
  {
    id: '8',
    productName: 'Pandebono',
    category: 'Panadería',
    measure: '4 unidades',
    price: 5500,
    stock: 100,
    image: '/images/pandebono.webp',
  },
  {
    id: '9',
    productName: 'Rosca de Arequipe',
    category: 'Panadería',
    measure: '1 unidad',
    price: 4500,
    stock: 100,
    image: '/images/rosca-arequipe.webp',
  },
  {
    id: '10',
    productName: 'Coca-Cola Original',
    category: 'Bebidas',
    measure: '1.5 L',
    price: 5800,
    stock: 100,
    image: '/images/coca-cola.webp',
  },
  {
    id: '11',
    productName: 'Jugo Hit Mango',
    category: 'Bebidas',
    measure: '1 L',
    price: 3200,
    stock: 100,
    image: '/images/jugo-mango.webp',
  },
  {
    id: '12',
    productName: 'Agua Manantial',
    category: 'Bebidas',
    measure: '600 ml',
    price: 2200,
    stock: 100,
    image: '/images/botella-agua.webp',
  },
  {
    id: '13',
    productName: 'Jabón Rey',
    category: 'Limpieza',
    measure: '3 unidades',
    price: 8500,
    stock: 100,
    image: '/images/jabon-azul.webp',
  },
  {
    id: '14',
    productName: 'Detergente Líquido Ariel',
    category: 'Limpieza',
    measure: '1.5 L',
    price: 18500,
    stock: 100,
    image: '/images/detergente.webp',
  },
  {
    id: '15',
    productName: 'Clorox',
    category: 'Limpieza',
    measure: '1 L',
    price: 7500,
    stock: 100,
    image: '/images/clorox.webp',
  },
];
