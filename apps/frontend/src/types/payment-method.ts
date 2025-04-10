export interface CreditCardPayment {
  id: string;
  type: 'credit_card';
  card_holder: string;
  card_number: string;
  cvv: string;
  expiration_date: string;
}

export interface CashPayment {
  id: string;
  type: 'cash';
  amount: number;
}

export interface NequiPayment {
  id: string;
  type: 'nequi';
  account_holder: string;
  account_number: string;
}

export type PaymentMethod = CreditCardPayment | CashPayment | NequiPayment;
export type PaymentMethodType = PaymentMethod['type'];
