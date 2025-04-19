export interface CreditCardPayment {
  id: string;
  type: 'credit_card';
  cardHolder: string;
  cardNumber: string;
  cvv: string;
  expirationDate: string;
}

export interface CashPayment {
  id: string;
  type: 'cash';
  amount: number;
}

export interface NequiPayment {
  id: string;
  type: 'nequi';
  accountHolder: string;
  accountNumber: string;
}

export type PaymentMethod = CreditCardPayment | CashPayment | NequiPayment;
export type PaymentMethodType = PaymentMethod['type'];
