import { FC } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { PaymentMethodsBaseProps } from '@/modules/customer/types/payment';
import {
  nequiSchema,
  NequiType,
} from '@/modules/customer/validations/payment-method.schema';
import { PaymentMethod } from '@/types/payment-method';

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
  } = useForm<NequiType>({
    resolver: zodResolver(nequiSchema),
    defaultValues: {
      accountHolder: '',
      accountNumber: '',
    },
  });

  const onSubmitNequi = (data: NequiType) => {
    const alreadyExists = paymentMethods.some(
      (method) =>
        method.type === 'nequi' && method.accountNumber === data.accountNumber,
    );

    if (alreadyExists) {
      toast.error('Este número de Nequi ya está registrado');
      return;
    }

    const newMethod: PaymentMethod = {
      id: crypto.randomUUID(),
      type: 'nequi',
      accountHolder: data.accountHolder,
      accountNumber: data.accountNumber,
    };

    setPaymentMethods((prev) => [...prev, newMethod]);
    setSelectedPaymentMethod(newMethod);
    setShowAddForm(false);
    toast.success('Nequi agregado correctamente');
  };

  const handleCancel = () => {
    setShowAddForm(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitNequi)} className="space-y-4 mt-3">
      <div className="flex flex-col gap-3">
        <Input
          label="Nombre de Cuenta"
          placeholder="Nequi Casa"
          {...register('accountHolder')}
          isRequired
          isInvalid={!!errors.accountHolder}
          errorMessage={errors.accountHolder?.message}
        />
        <Input
          label="Número de teléfono"
          placeholder="3101234567"
          {...register('accountNumber')}
          isRequired
          isInvalid={!!errors.accountNumber}
          errorMessage={errors.accountNumber?.message}
        />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Button variant="light" onPress={handleCancel}>
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
