import { FC, useCallback, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { toast } from 'sonner';
import { z } from 'zod';

import { creditCardSchema } from '@/modules/customer/validations/payment-method.schema';
import {
  PaymentMethod,
  PaymentMethodsBaseProps,
} from '@/modules/customer/types/payment';

const CreditCardForm: FC<PaymentMethodsBaseProps> = ({
  setShowAddForm,
  setPaymentMethods,
  setSelectedPaymentMethod,
}) => {
  const [cardNumberValue, setCardNumberValue] = useState('');
  const [expiryDateValue, setExpiryDateValue] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<z.infer<typeof creditCardSchema>>({
    resolver: zodResolver(creditCardSchema),
    mode: 'onChange',
  });

  // Formateador de número de tarjeta (espacios cada 4 dígitos)
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches?.[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    return parts.length > 0 ? parts.join(' ') : v;
  };

  // Formateador de fecha (autoinserta / después del mes)
  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    return v;
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setCardNumberValue(formattedValue);
    setValue('cardNumber', formattedValue);
    trigger('cardNumber');
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setExpiryDateValue(formattedValue);
    setValue('expiryDate', formattedValue);
    trigger('expiryDate');
  };

  const onSubmit = useCallback(
    (data: z.infer<typeof creditCardSchema>) => {
      const newMethod: PaymentMethod = {
        id: crypto.randomUUID(),
        type: 'credit',
        details: {
          cardNumber: data.cardNumber.replace(/\s+/g, ''),
          cardHolder: data.cardHolder.trim(),
          expiryDate: data.expiryDate,
          cvv: data.cvv,
        },
      };

      setPaymentMethods((prev) => [...prev, newMethod]);
      setSelectedPaymentMethod(newMethod);
      setShowAddForm(false);
      toast.success('Tarjeta agregada correctamente');
      reset();
      setCardNumberValue('');
      setExpiryDateValue('');
    },
    [setPaymentMethods, setSelectedPaymentMethod, setShowAddForm, reset],
  );

  const handleCancel = useCallback(() => {
    setShowAddForm(false);
    reset();
    setCardNumberValue('');
    setExpiryDateValue('');
  }, [setShowAddForm, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 mt-3"
      onClick={(e) => e.stopPropagation()}
      noValidate
    >
      <Input
        label="Número de tarjeta"
        placeholder="1234 5678 9012 3456"
        isRequired
        isInvalid={!!errors.cardNumber}
        errorMessage={errors.cardNumber?.message?.toString()}
        value={cardNumberValue}
        onChange={handleCardNumberChange}
        maxLength={19} // 16 dígitos + 3 espacios
        autoComplete="cc-number"
      />

      <Input
        label="Nombre en la tarjeta"
        placeholder="Juan Perez"
        isRequired
        isInvalid={!!errors.cardHolder}
        errorMessage={errors.cardHolder?.message?.toString()}
        {...register('cardHolder')}
        autoComplete="cc-name"
      />

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Fecha expiración (MM/AA)"
          placeholder="MM/AA"
          isRequired
          isInvalid={!!errors.expiryDate}
          errorMessage={errors.expiryDate?.message?.toString()}
          value={expiryDateValue}
          onChange={handleExpiryDateChange}
          maxLength={5} // MM/AA
          autoComplete="cc-exp"
        />

        <Input
          label="CVV"
          placeholder="123"
          type="password"
          isRequired
          isInvalid={!!errors.cvv}
          errorMessage={errors.cvv?.message?.toString()}
          {...register('cvv')}
          maxLength={3}
          autoComplete="cc-csc"
        />
      </div>

      <div className="flex gap-3 justify-end pt-2">
        <Button variant="light" onPress={handleCancel}>
          Cancelar
        </Button>
        <Button
          color="primary"
          type="submit"
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Guardar tarjeta
        </Button>
      </div>
    </form>
  );
};

export default CreditCardForm;
