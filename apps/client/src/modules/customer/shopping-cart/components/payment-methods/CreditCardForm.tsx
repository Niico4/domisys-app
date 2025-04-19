import { FC } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { toast } from 'sonner';
import {
  creditCardSchema,
  CreditCardType,
} from '@modules/customer/validations/payment-method.schema';
import { PaymentMethodsBaseProps } from '@modules/customer/types/payment';

import { formatCardNumber, formatExpiryDate } from '@/utils/format';
import { PaymentMethod } from '@/types/payment-method';

const CreditCardForm: FC<PaymentMethodsBaseProps> = ({
  setShowAddForm,
  setPaymentMethods,
  setSelectedPaymentMethod,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
    setValue,
    trigger,
  } = useForm<CreditCardType>({
    resolver: zodResolver(creditCardSchema),
    defaultValues: {
      cardHolder: '',
      cardNumber: '',
      expirationDate: '',
      cvv: '',
    },
  });

  const cardNumberValue = watch('cardNumber');
  const expiryDateValue = watch('expirationDate');

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatCardNumber(e.target.value);
    setValue('cardNumber', formattedValue);
    trigger('cardNumber');
  };

  const handleExpiryDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatExpiryDate(e.target.value);
    setValue('expirationDate', formattedValue);
    trigger('expirationDate');
  };

  const onSubmit = (data: CreditCardType) => {
    const newMethod: PaymentMethod = {
      id: crypto.randomUUID(),
      type: 'credit_card',
      cardNumber: data.cardNumber.replace(/\s+/g, ''),
      cardHolder: data.cardHolder.trim(),
      expirationDate: data.expirationDate,
      cvv: data.cvv,
    };

    setPaymentMethods((prev) => [...prev, newMethod]);
    setSelectedPaymentMethod(newMethod);
    setShowAddForm(false);
    toast.success('Tarjeta agregada correctamente');
    reset();
  };

  const handleCancel = () => {
    setShowAddForm(false);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-3">
      <Input
        label="Nombre en la tarjeta"
        placeholder="Juan Perez"
        isRequired
        isInvalid={!!errors.cardHolder}
        errorMessage={errors.cardHolder?.message?.toString()}
        {...register('cardHolder')}
        autoComplete="cc-name"
      />
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

      <div className="grid grid-cols-2 gap-4">
        <Input
          label="Fecha expiración (MM/AA)"
          placeholder="MM/AA"
          isRequired
          isInvalid={!!errors.expirationDate}
          errorMessage={errors.expirationDate?.message?.toString()}
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
