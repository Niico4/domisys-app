import { useState } from 'react';
import { toast } from 'sonner';

import { PaymentMethod, PaymentMethodType } from '@/types/payment-method';

export function usePaymentMethods(initialMethods: PaymentMethod[]) {
  const [paymentMethods, setPaymentMethods] = useState(initialMethods);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [paymentMethodType, setPaymentMethodType] =
    useState<PaymentMethodType | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleSelectMethod = (type: PaymentMethodType) => {
    setPaymentMethodType(type);
    setShowAddForm(false);

    // Si hay métodos del tipo seleccionado, selecciona el primero automáticamente
    const methodsOfType = paymentMethods.filter((m) => m.type === type);
    setSelectedPaymentMethod(
      methodsOfType.length > 0 ? methodsOfType[0] : null,
    );
  };

  const handleDeleteMethod = (id: string) => {
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
    setSelectedPaymentMethod((prev) => (prev?.id === id ? null : prev));
    toast.success('Método de pago eliminado');
  };

  const handleSelectPaymentMethod = (
    method: PaymentMethod,
    checked: boolean,
  ) => {
    setSelectedPaymentMethod(checked ? method : null);
    setShowAddForm(false);
  };

  return {
    paymentMethods,
    selectedPaymentMethod,
    paymentMethodType,
    showAddForm,
    setPaymentMethods,
    setSelectedPaymentMethod,
    setShowAddForm,
    handleSelectMethod,
    handleDeleteMethod,
    handleSelectPaymentMethod,
  };
}
