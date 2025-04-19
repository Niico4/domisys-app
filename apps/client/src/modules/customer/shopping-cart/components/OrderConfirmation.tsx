import { FC, useState } from 'react';
import { Button } from '@heroui/button';
import {
  IconCash,
  IconCreditCard,
  IconCurrencyDollar,
  IconShoppingBag,
  IconTransfer,
} from '@tabler/icons-react';
import { toast } from 'sonner';

import Receipt from './Receipt';

import { PaymentMethod, PaymentMethodType } from '@/types/payment-method';

interface OrderConfirmationProps {
  total: number;
  totalItems: number;
  paymentMethod: PaymentMethod | null;
  paymentMethodType: PaymentMethodType | null;
  onConfirm: () => Promise<string | null>;
  onCancel: () => void;
  onClose: () => void;
}

const OrderConfirmation: FC<OrderConfirmationProps> = ({
  total,
  totalItems,
  paymentMethod,
  paymentMethodType,
  onConfirm,
  onCancel,
  onClose,
}) => {
  const [state, setState] = useState<{
    isProcessing: boolean;
    showInvoice: boolean;
    orderID: string;
  }>({
    isProcessing: false,
    showInvoice: false,
    orderID: '',
  });

  const getPaymentMethodDetails = () => {
    if (!paymentMethod && paymentMethodType === 'cash') {
      return (
        <div className="flex items-center gap-2 cursor-pointer">
          <IconCash size={18} className="text-primary" />
          <span>Pago en efectivo</span>
        </div>
      );
    }

    if (paymentMethod?.type === 'credit_card') {
      return (
        <div className="flex items-center gap-2 cursor-pointer">
          <IconCreditCard size={18} className="text-primary" />
          <span>Tarjeta **** {paymentMethod.cardNumber?.slice(-4)}</span>
        </div>
      );
    }

    if (paymentMethod?.type === 'nequi') {
      return (
        <div className="flex items-center gap-2 cursor-pointer">
          <IconTransfer size={18} className="text-primary" />
          <span>Nequi: {paymentMethod.accountNumber}</span>
        </div>
      );
    }

    return <span className="text-red-500">Método no seleccionado</span>;
  };

  const handleConfirm = async () => {
    setState((prev) => ({ ...prev, isProcessing: true }));

    try {
      const orderId = await onConfirm();
      if (orderId) {
        setState({
          isProcessing: false,
          showInvoice: true,
          orderID: orderId,
        });
      }
    } catch (error) {
      console.error('Error en confirmación:', error);
      toast.error('Error al procesar el pago');
      setState((prev) => ({ ...prev, isProcessing: false }));
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  if (state.showInvoice) {
    return (
      <Receipt
        getPaymentMethodDetails={getPaymentMethodDetails}
        onClose={onClose}
        total={total}
        orderID={state.orderID}
        totalItems={totalItems}
      />
    );
  }

  return (
    <div className="p-5 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-2xl text-white opacity-90">
          Confirmar Pedido
        </h3>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <ul className="flex flex-col gap-4">
        <li className="flex justify-between items-center pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-gray-300">
            <IconShoppingBag stroke={1.5} />
            <span className="font-medium">Productos</span>
          </div>
          <span className="font-semibold">{totalItems}</span>
        </li>

        <li className="flex justify-between items-center pb-3 border-b border-white/10">
          <div className="text-right font-medium">
            {getPaymentMethodDetails()}
          </div>
        </li>

        <li className="flex justify-between items-center pb-3 border-b border-white/10">
          <div className="flex items-center gap-2 text-gray-300">
            <IconCurrencyDollar stroke={1.5} />
            <span className="font-medium">Total</span>
          </div>
          <span className="text-xl font-bold text-primary">
            ${total.toLocaleString()}
          </span>
        </li>
      </ul>

      <div className="flex gap-3 justify-end pt-2">
        <Button
          variant="flat"
          radius="sm"
          color="danger"
          onPress={handleCancel}
          disabled={state.isProcessing}
        >
          Cancelar
        </Button>
        <Button
          color="success"
          variant="flat"
          radius="sm"
          onPress={handleConfirm}
          isLoading={state.isProcessing}
          disabled={state.isProcessing}
        >
          Confirmar Pago
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
