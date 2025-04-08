import { FC } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

import {
  PaymentMethod,
  PaymentMethodsBaseProps,
} from '@/modules/customer/types/payment';
import { nequiSchema } from '@/modules/customer/validations/payment-method.schema';

interface NequiFormProps extends PaymentMethodsBaseProps {
  paymentMethods: PaymentMethod[];
}

const NequiForm: FC<NequiFormProps> = ({
  setShowAddForm,
  setPaymentMethods,
  paymentMethods,
  setSelectedPaymentMethod,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(nequiSchema),
  });

  const onSubmitNequi = (data: z.infer<typeof nequiSchema>) => {
    const newMethod: PaymentMethod = {
      id: Date.now().toString(),
      type: 'nequi',
      details: {
        phoneNumber: data.phoneNumber,
      },
    };

    setPaymentMethods([...paymentMethods, newMethod]);
    setShowAddForm(false);
    setSelectedPaymentMethod(newMethod);
    toast.success('Nequi agregado correctamente');
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmitNequi)}
      className="space-y-3 mt-3"
      onClick={(e) => e.stopPropagation()}
    >
      <div>
        <Input
          label="Número de teléfono"
          placeholder="3101234567"
          {...register('phoneNumber')}
          isRequired
          isInvalid={!!errors.phoneNumber}
          errorMessage={errors.phoneNumber?.message}
        />
      </div>

      <div className="flex items-center justify-end gap-2 mt-3">
        <Button variant="light" onPress={() => setShowAddForm(false)}>
          Cancelar
        </Button>
        <Button color="primary" type="submit">
          Guardar Nequi
        </Button>
      </div>
    </form>
  );
};

export default NequiForm;
