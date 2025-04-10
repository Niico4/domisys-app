import { FC, JSX } from 'react';
import { Button } from '@heroui/button';
import { IconReceipt } from '@tabler/icons-react';

interface Props {
  getPaymentMethodDetails: () => JSX.Element;
  total: number;
  totalItems: number;
  onClose: () => void;
  orderID: string;
}

const Receipt: FC<Props> = ({
  getPaymentMethodDetails,
  onClose,
  total,
  totalItems,
  orderID,
}) => {
  return (
    <div className="p-5 flex flex-col gap-6 w-[380px]">
      <div className="flex flex-col gap-1">
        <h3 className="font-bold text-2xl text-white opacity-90 flex items-center gap-2">
          <IconReceipt className="text-primary" />
          Factura de Compra
        </h3>
        <div className="h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-gray-300">N° Orden:</span>
          <span className="font-mono">{orderID}</span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-white/10">
          <span className="text-gray-300">Productos:</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between items-center pb-3 border-b border-white/10">
          <span className="text-gray-300">Método de pago:</span>
          {getPaymentMethodDetails()}
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-300">Total pagado:</span>
          <span className="text-xl font-bold text-primary">
            ${total.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <p className="text-sm text-gray-400 text-center">
          Guarda esta información para cualquier reclamo
        </p>
        <Button
          color="primary"
          onPress={onClose}
          className="mt-2 text-[#121212]"
        >
          Cerrar
        </Button>
      </div>
    </div>
  );
};

export default Receipt;
