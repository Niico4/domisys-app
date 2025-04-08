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

import { PaymentMethod, PaymentMethodType } from '../../types/payment';

import Receipt from './Receipt';

interface OrderConfirmationProps {
  total: number;
  totalItems: number;
  paymentMethod: PaymentMethod | null;
  paymentMethodType: PaymentMethodType | null;
  onConfirm: () => Promise<boolean>;
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
  const [isProcessing, setIsProcessing] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const getPaymentMethodDetails = () => {
    if (!paymentMethod && paymentMethodType === 'cash') {
      return (
        <div className="flex items-center gap-2">
          <IconCash size={18} className="text-primary" />
          <span>Pago en efectivo</span>
        </div>
      );
    }

    if (paymentMethod?.type === 'credit') {
      return (
        <div className="flex items-center gap-2">
          <IconCreditCard size={18} className="text-primary" />
          <span>
            Tarjeta **** {paymentMethod.details.cardNumber?.slice(-4)}
          </span>
        </div>
      );
    }

    if (paymentMethod?.type === 'nequi') {
      return (
        <div className="flex items-center gap-2">
          <IconTransfer size={18} className="text-primary" />
          <span>Nequi: {paymentMethod.details.phoneNumber}</span>
        </div>
      );
    }

    return <span className="text-red-500">Método no seleccionado</span>;
  };

  const handleConfirm = async () => {
    setIsProcessing(true);
    try {
      await onConfirm();
      setShowInvoice(true);
      toast.success('Pago procesado exitosamente');
    } catch (error) {
      toast.error(`Error al procesar el pago - ${error}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCancel = () => {
    onCancel();
    toast.info('Compra cancelada');
  };

  if (showInvoice) {
    return (
      <Receipt
        getPaymentMethodDetails={getPaymentMethodDetails}
        onClose={onClose}
        total={total}
        totalItems={totalItems}
      />
    );
  }

  return (
    <div className="p-5 flex flex-col gap-6">
      {/* Encabezado */}
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-2xl text-white opacity-90">
          Confirmar Pedido
        </h3>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Detalles del pedido */}
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

      {/* Botones de acción */}
      <div className="flex gap-3 justify-end pt-2">
        <Button
          variant="flat"
          radius="sm"
          color="danger"
          onPress={handleCancel}
          disabled={isProcessing}
        >
          Cancelar
        </Button>
        <Button
          color="success"
          variant="flat"
          radius="sm"
          onPress={handleConfirm}
          isLoading={isProcessing}
          disabled={isProcessing}
        >
          {isProcessing ? 'Procesando...' : 'Confirmar Pago'}
        </Button>
      </div>
    </div>
  );
};

export default OrderConfirmation;
