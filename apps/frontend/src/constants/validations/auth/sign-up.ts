import { z } from 'zod';

export const signUpSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: 'El nombre debe tener al menos 3 caracteres.' })
      .max(20, { message: 'El nombre no puede tener más de 20 caracteres.' }),
    lastName: z
      .string()
      .min(3, { message: 'El apellido debe tener al menos 3 caracteres.' })
      .max(20, { message: 'El apellido no puede tener más de 20 caracteres.' }),
    email: z
      .string()
      .email({ message: 'Introduce un correo electrónico válido.' }),
    phoneNumber: z
      .string()
      .min(10, {
        message: 'El número de teléfono debe tener al menos 10 caracteres.',
      })
      .max(15, {
        message: 'El número de teléfono no puede tener más de 15 caracteres.',
      }),
    address: z
      .string()
      .min(10, {
        message: 'La dirección debe tener al menos 10 caracteres.',
      })
      .max(50, {
        message: 'La dirección no puede tener más de 50 caracteres.',
      }),
    password: z
      .string()
      .min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' })
      .max(20, {
        message: 'La contraseña no puede exceder los 20 caracteres.',
      })
      .regex(/[A-Z]/, {
        message: 'La contraseña debe incluir al menos una letra mayúscula.',
      })
      .regex(/[a-z]/, {
        message: 'La contraseña debe incluir al menos una letra minúscula.',
      })
      .regex(/[0-9]/, {
        message: 'La contraseña debe incluir al menos un número.',
      }),
    confirmPassword: z
      .string()
      .min(6, { message: 'Debes confirmar tu contraseña.' })
      .max(20, {
        message: 'La contraseña no puede exceder los 20 caracteres.',
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Las contraseñas deben coincidir',
    path: ['confirmPassword'],
  });

export type SignUpType = z.infer<typeof signUpSchema>;
