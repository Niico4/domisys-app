import { Customer } from '@/store/useOrders.store';

export const mockUser: Customer = {
  id: 'user-001',
  name: 'Karol',
  lastname: 'Herrera',
  email: 'karol.herrera@example.com',
  phoneNumber: '1234567890',
  address: {
    id: 'address-001',
    street: 'Calle 123',
    details: 'Departamento 456',
    neighborhood: 'Barrio 789',
  },
};
