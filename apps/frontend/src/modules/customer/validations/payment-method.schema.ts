import { z } from 'zod';

export const creditCardSchema = z.object({
  cardNumber: z
    .string()
    .min(1, 'El número de tarjeta es requerido')
    .transform((val) => val.replace(/\s+/g, ''))
    .refine((val) => /^\d{16}$/.test(val), {
      message: 'El número de tarjeta debe tener exactamente 16 dígitos',
    })
    .refine(
      (val) => {
        const firstDigit = val[0];
        const firstTwoDigits = val.substring(0, 2);

        // Visa comienza con 4, Mastercard con 51-55
        return (
          firstDigit === '4' ||
          (firstTwoDigits >= '51' && firstTwoDigits <= '55')
        );
      },
      {
        message: 'Solo aceptamos Visa (4) y Mastercard (51-55)',
      },
    ),

  cardHolder: z
    .string()
    .min(1, 'El nombre del titular es requerido')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'Solo se permiten letras y espacios'),

  expiryDate: z
    .string()
    .min(1, 'La fecha de expiración es requerida')
    .regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, 'Formato inválido. Use MM/AA')
    .refine(
      (val) => {
        const [month, year] =
          val.split('/').length === 2
            ? val.split('/')
            : [val.substring(0, 2), val.substring(2)];

        const expiry = new Date(parseInt(`20${year}`), parseInt(month));
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        return expiry >= today;
      },
      {
        message: 'La tarjeta está expirada',
      },
    ),

  cvv: z
    .string()
    .length(3, 'El código CVV debe tener exactamente 3 dígitos')
    .regex(/^\d+$/, 'Solo se permiten números'),
});

export const nequiSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, 'El número de teléfono es requerido')
    .transform((val) => val.replace(/\s+/g, '')) // Elimina espacios
    .refine((val) => /^3\d+$/.test(val), {
      message: 'Debe comenzar con 3',
    })
    .refine((val) => val.length === 10, {
      message: 'Debe tener exactamente 10 dígitos',
    })
    .refine((val) => /^\d{10}$/.test(val), {
      message: 'Solo se permiten números',
    }),
});

export type CreditCardType = z.infer<typeof creditCardSchema>;
export type NequiType = z.infer<typeof nequiSchema>;
