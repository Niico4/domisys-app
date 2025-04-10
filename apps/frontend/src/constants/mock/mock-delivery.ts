import { mockCustomer } from './mock-customer';

import { Delivery } from '@/types/users/delivery';

export const mockDelivery: Delivery = {
  id: 'del_345678',
  name: 'Andrés',
  lastname: 'Gómez',
  email: 'andres.gomez@deliveryapp.com',
  phoneNumber: '+573005678901',
  orders: [
    {
      id: 'ord_123456',
      created_at: new Date('2023-05-15T14:30:00'),
      customer: mockCustomer,
      delivery: {} as Delivery, // Se auto-referencia
      paymentMethod: {
        id: 'pm_123',
        type: 'credit_card',
        card_holder: 'CARLOS MARTINEZ',
        card_number: '5500005555555555',
        cvv: '123',
        expiration_date: '12/25',
      },
      products: [
        {
          id: '8',
          productName: 'Pandebono',
          category: 'Panadería',
          measure: '4 unidades',
          price: 5500,
          stock: 100,
          image: '/images/pandebono.webp',
          quantity: 1,
        },
      ],
      status: 'delivered',
      total_amount: 8500,
    },
    {
      id: 'ORD_78901',
      created_at: new Date('2023-05-16T18:45:00'),
      customer: {
        ...mockCustomer,
        id: 'cus_345678',
        name: 'María',
        lastname: 'Rodríguez',
      },
      paymentMethod: {
        id: 'pm_789',
        type: 'cash',
        amount: 75000,
      },
      products: [
        {
          id: '5',
          productName: 'Queso Campesino',
          category: 'Lácteos',
          measure: '250 g',
          price: 7800,
          stock: 100,
          image: '/images/queso.webp',
          quantity: 10,
        },
        {
          id: '6',
          productName: 'Yogurt Griego',
          category: 'Lácteos',
          measure: '150 g',
          price: 3200,
          stock: 100,
          image: '/images/yogurt.webp',
          quantity: 3,
        },
        {
          id: '8',
          productName: 'Pandebono',
          category: 'Panadería',
          measure: '4 unidades',
          price: 5500,
          stock: 100,
          image: '/images/pandebono.webp',
          quantity: 1,
        },
        {
          id: '9',
          productName: 'Rosca de Arequipe',
          category: 'Panadería',
          measure: '1 unidad',
          price: 4500,
          stock: 100,
          image: '/images/rosca-arequipe.webp',
          quantity: 1,
        },
      ],
      status: 'delivering',
      total_amount: 92600,
    },
  ],
};
