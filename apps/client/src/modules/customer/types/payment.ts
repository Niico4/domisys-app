import { PaymentMethod } from '@/types/payment-method';

export interface PaymentMethodsBaseProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentMethods: React.Dispatch<React.SetStateAction<PaymentMethod[]>>;
  setSelectedPaymentMethod: React.Dispatch<
    React.SetStateAction<PaymentMethod | null>
  >;
}
