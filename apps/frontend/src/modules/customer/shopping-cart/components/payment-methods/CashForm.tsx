import React, { FC } from 'react';
import { Checkbox } from '@heroui/checkbox';

import { PaymentMethod } from '@/modules/customer/types/payment';

interface Props {
  selectedPaymentMethod: PaymentMethod | null;
  setSelectedPaymentMethod: React.Dispatch<
    React.SetStateAction<PaymentMethod | null>
  >;
}

const CashForm: FC<Props> = ({
  selectedPaymentMethod,
  setSelectedPaymentMethod,
}) => {
  return (
    <div className="mt-3 p-3 rounded-lg" onClick={(e) => e.stopPropagation()}>
      <p className="text-gray-700">
        El pago en efectivo se realizará al momento de la entrega.
      </p>
      <div className="mt-3">
        <Checkbox
          isSelected={selectedPaymentMethod?.type === 'cash'}
          onChange={() =>
            setSelectedPaymentMethod({
              id: 'cash',
              type: 'cash',
              details: {},
            })
          }
        >
          Confirmar pago en efectivo
        </Checkbox>
      </div>
    </div>
  );
};

export default CashForm;
