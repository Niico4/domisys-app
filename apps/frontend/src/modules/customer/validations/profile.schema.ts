import { z } from 'zod';

export const profileSchema = z.object({
  name: z.string().min(2, 'Nombre requerido'),
  lastName: z.string().min(2, 'Apellido requerido'),
  email: z.string().email('Correo inválido'),
  phoneNumber: z.string().min(7, 'Teléfono requerido'),
  address: z.string().min(3, 'Dirección requerida'),
});

export type ProfileForm = z.infer<typeof profileSchema>;
