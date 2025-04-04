import { z } from 'zod';

export const signInSchema = z.object({
  email: z
    .string()
    .min(1, 'El correo electrónico es obligatorio')
    .email({ message: 'El formato del correo es inválido' }),

  password: z
    .string()
    .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    .max(20, { message: 'La contraseña no puede exceder los 20 caracteres' }),
});

export type SignInType = z.infer<typeof signInSchema>;
