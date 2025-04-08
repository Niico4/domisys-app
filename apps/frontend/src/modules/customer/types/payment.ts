export type PaymentMethodType = 'credit' | 'cash' | 'nequi';

export interface PaymentMethodDetails {
  cardNumber?: string;
  cardHolder?: string;
  expiryDate?: string;
  cvv?: string;
  phoneNumber?: string;
  bankName?: string;
  accountNumber?: string;
}

export interface PaymentMethod {
  id: string;
  type: PaymentMethodType;
  details: PaymentMethodDetails;
}

export interface PaymentMethodsBaseProps {
  setShowAddForm: React.Dispatch<React.SetStateAction<boolean>>;
  setPaymentMethods: React.Dispatch<React.SetStateAction<PaymentMethod[]>>;
  setSelectedPaymentMethod: React.Dispatch<
    React.SetStateAction<PaymentMethod | null>
  >;
}
