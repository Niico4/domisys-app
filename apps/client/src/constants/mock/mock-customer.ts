import { Customer } from '@/types/users/customer';

export const mockCustomer: Customer = {
  id: 'cus_789012',
  name: 'Carlos',
  lastName: 'Martínez',
  email: 'carlos.martinez@example.com',
  phoneNumber: '+573001234567',
  address: {
    id: 'add_123',
    street: 'Carrera 45 # 26-85',
    neighborhood: 'El Poblado',
    details: 'Edificio Altos del Poblado, apto 302',
  },
  paymentMethods: [
    {
      id: 'pm_123',
      type: 'credit_card',
      cardHolder: 'CARLOS MARTINEZ',
      cardNumber: '5500005555555555',
      cvv: '123',
      expirationDate: '12/25',
    },
    {
      id: 'pm_456',
      type: 'nequi',
      accountHolder: 'Carlos Martínez',
      accountNumber: '3101234567',
    },
  ],
  orders: [
    {
      id: 'ord_123456',
      createdAt: new Date('2023-05-15T14:30:00'),
      customer: {} as Customer, // Se auto-referencia
      paymentMethod: {
        id: 'pm_123',
        type: 'credit_card',
        cardHolder: 'CARLOS MARTINEZ',
        cardNumber: '5500005555555555',
        cvv: '123',
        expirationDate: '12/25',
      },
      products: [
        {
          id: '1',
          productName: 'Banano Criollo',
          category: 'Frutas y Verduras',
          measure: '1 lb',
          price: 2500,
          stock: 100,
          image: '/images/banano.webp',
          quantity: 10,
        },
        {
          id: '2',
          productName: 'Aguacate Hass',
          category: 'Frutas y Verduras',
          measure: 'Unidad',
          price: 5000,
          stock: 1000,
          image: '/images/aguacate.webp',
          quantity: 15,
        },
      ],
      status: 'delivered',
      totalAmount: 50000,
    },
  ],
};
