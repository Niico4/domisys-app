import { useCallback, useMemo, useState } from 'react';
import {
  IconCash,
  IconCreditCard,
  IconPlus,
  IconTransfer,
  IconX,
} from '@tabler/icons-react';
import { toast } from 'sonner';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Checkbox } from '@heroui/checkbox';
import { Popover, PopoverTrigger, PopoverContent } from '@heroui/popover';

import { useCartStore } from '@/store/useCart.store';
import CreditCardForm from '@/modules/customer/shopping-cart/components/payment-methods/CreditCardForm';
import NequiForm from '@/modules/customer/shopping-cart/components/payment-methods/NequiForm';
import CashForm from '@/modules/customer/shopping-cart/components/payment-methods/CashForm';
import ProductCartCard from '@/modules/customer/shopping-cart/components/ProductCartCard';
import {
  PaymentMethodType,
  PaymentMethod,
} from '@/modules/customer/types/payment';
import OrderSummary from '@/modules/customer/shopping-cart/components/OrderSummary';
import OrderConfirmation from '@/modules/customer/shopping-cart/components/OrderConfirmation';

const SHOPPING_COST = 3000;

const ShoppingCartPage = () => {
  const [paymentMethodType, setPaymentMethodType] =
    useState<PaymentMethodType | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<PaymentMethod | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: '1',
      type: 'credit',
      details: {
        cardNumber: '4242424242424242',
        cardHolder: 'Juan Perez',
        expiryDate: '12/25',
        cvv: '123',
      },
    },
    {
      id: '2',
      type: 'nequi',
      details: {
        phoneNumber: '3101234567',
      },
    },
  ]);

  const { cart, removeFromCart, updateQuantity, clearCart } = useCartStore();

  const { subtotal, totalItems, total } = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = subtotal + SHOPPING_COST;
    return { subtotal, totalItems, total };
  }, [cart]);

  const handleSelectMethod = useCallback(
    (type: PaymentMethodType, e?: React.MouseEvent) => {
      e?.stopPropagation();
      setPaymentMethodType(type);
      setShowAddForm(false);
      setSelectedPaymentMethod(null);
    },
    [],
  );

  const handleAddClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowAddForm(true);
    setSelectedPaymentMethod(null);
  }, []);

  const handleDeleteMethod = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setPaymentMethods((prev) => prev.filter((method) => method.id !== id));
    setSelectedPaymentMethod((prev) => (prev?.id === id ? null : prev));
    toast.success('Método de pago eliminado');
  }, []);

  const handleSelectPaymentMethod = useCallback(
    (method: PaymentMethod, e: React.ChangeEvent<HTMLInputElement>) => {
      e.stopPropagation();
      setSelectedPaymentMethod(e.target.checked ? method : null);
      setShowAddForm(false);
    },
    [],
  );

  const handleQuantityChange = useCallback(
    (id: string, newQuantity: number) => {
      const item = cart.find((item) => item.id === id);
      if (!item) return;

      if (newQuantity > item.stock) {
        toast.error(
          `No hay suficiente stock. Disponible: ${item.stock} unidades`,
        );
        return;
      }

      if (newQuantity < 1) {
        removeFromCart(id);
      } else {
        updateQuantity(id, newQuantity);
      }
    },
    [cart, removeFromCart, updateQuantity],
  );

  const handleContinue = useCallback(async () => {
    if (!selectedPaymentMethod && paymentMethodType !== 'cash') {
      toast.warning('Por favor selecciona un método de pago');
      return false; // Indica que no se pudo completar
    }

    // Simular proceso de pago
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return true; // pago exitoso
  }, [selectedPaymentMethod, paymentMethodType]);

  // Función para manejar el cierre después de mostrar la factura
  const handleCloseAfterPayment = useCallback(() => {
    setIsPopoverOpen(false);
    clearCart();
  }, [clearCart]);

  const formatCardNumber = useCallback((number: string = '') => {
    return number.replace(/(\d{4})(?=\d)/g, '$1 ');
  }, []);

  const renderPaymentMethodForm = useCallback(() => {
    const commonProps = {
      setPaymentMethods,
      setSelectedPaymentMethod,
      setShowAddForm,
    };

    switch (paymentMethodType) {
      case 'credit':
        return <CreditCardForm {...commonProps} />;
      case 'nequi':
        return <NequiForm paymentMethods={paymentMethods} {...commonProps} />;
      case 'cash':
        return <CashForm />;
      default:
        return null;
    }
  }, [paymentMethodType, paymentMethods, selectedPaymentMethod]);

  if (cart.length === 0) {
    return (
      <section className="flex flex-col gap-12">
        <h1>Carrito de Compras</h1>
        <p className="text-center text-lg text-gray-500 py-10">
          Tu carrito está vacío
        </p>
      </section>
    );
  }

  return (
    <section className="flex flex-col gap-12">
      <h1>Carrito de Compras</h1>

      <div className="grid grid-cols-2 items-start gap-20">
        <article>
          <div className="flex flex-col gap-4 mb-4 h-[576px] overflow-scroll">
            {cart.map(({ id, productName, price, stock, quantity }) => (
              <ProductCartCard
                key={id}
                id={id}
                handleQuantityChange={handleQuantityChange}
                price={price}
                productName={productName}
                quantity={quantity}
                removeFromCart={removeFromCart}
                stock={stock}
              />
            ))}
          </div>
        </article>

        <article className="flex flex-col justify-center gap-5 w-4/5 mx-auto">
          <OrderSummary
            shoppingCost={SHOPPING_COST}
            subtotal={subtotal}
            total={total}
            totalItems={totalItems}
          />

          <Card
            className="bg-white/10 border border-white/15 p-5 backdrop-blur-sm"
            radius="sm"
          >
            <div className="flex flex-col">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-3">Método de pago</h3>

                <div className="space-y-3">
                  {/* Tarjeta de crédito/débito */}
                  <div
                    className={`px-4 py-3 rounded-lg transition-colors 
                      ${paymentMethodType === 'credit' ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] hover:bg-white/[0.08]'}`}
                    onClick={(e) => handleSelectMethod('credit', e)}
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      <IconCreditCard size={20} />
                      <span className="font-medium">
                        Tarjeta de crédito/débito
                      </span>
                    </div>

                    {paymentMethodType === 'credit' && (
                      <div
                        className="mt-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {paymentMethods.filter((m) => m.type === 'credit')
                          .length > 0 ? (
                          <>
                            {paymentMethods
                              .filter((m) => m.type === 'credit')
                              .map((method) => (
                                <div
                                  key={method.id}
                                  className="flex items-center gap-3 p-2 hover:bg-white/[0.05] rounded justify-between"
                                >
                                  <div className="flex items-center gap-3">
                                    <Checkbox
                                      isSelected={
                                        selectedPaymentMethod?.id === method.id
                                      }
                                      onChange={(e) =>
                                        handleSelectPaymentMethod(method, e)
                                      }
                                    />
                                    <div>
                                      <p>{method.details.cardHolder}</p>
                                      <p className="text-sm text-gray-400">
                                        {formatCardNumber(
                                          method.details.cardNumber,
                                        )}
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    isIconOnly
                                    variant="light"
                                    color="danger"
                                    size="sm"
                                    onClick={(e) =>
                                      handleDeleteMethod(method.id, e)
                                    }
                                  >
                                    <IconX size={16} />
                                  </Button>
                                </div>
                              ))}
                            <Button
                              variant="light"
                              size="sm"
                              className="mt-2"
                              startContent={<IconPlus size={16} />}
                              onClick={handleAddClick}
                            >
                              Agregar nueva tarjeta
                            </Button>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-400 text-sm">
                              No tienes tarjetas guardadas
                            </p>
                            <Button
                              variant="light"
                              size="sm"
                              className="mt-2"
                              startContent={<IconPlus size={16} />}
                              onClick={handleAddClick}
                            >
                              Agregar nueva tarjeta
                            </Button>
                          </>
                        )}

                        {showAddForm && renderPaymentMethodForm()}
                      </div>
                    )}
                  </div>

                  {/* Efectivo */}
                  <div
                    className={`px-4 py-3 rounded-lg transition-colors 
                      ${paymentMethodType === 'cash' ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] hover:bg-white/[0.08]'}`}
                    onClick={(e) => handleSelectMethod('cash', e)}
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      <IconCash size={20} />
                      <span className="font-medium">Efectivo</span>
                    </div>

                    {paymentMethodType === 'cash' && renderPaymentMethodForm()}
                  </div>

                  {/* Nequi o transferencia */}
                  <div
                    className={`px-4 py-3 rounded-lg transition-colors 
                      ${paymentMethodType === 'nequi' ? 'bg-primary/10 border border-primary/20' : 'bg-white/[0.04] hover:bg-white/[0.08]'}`}
                    onClick={(e) => handleSelectMethod('nequi', e)}
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      <IconTransfer size={20} />
                      <span className="font-medium">Nequi o transferencia</span>
                    </div>

                    {paymentMethodType === 'nequi' && (
                      <div
                        className="mt-3"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {paymentMethods.filter((m) => m.type === 'nequi')
                          .length > 0 ? (
                          <>
                            {paymentMethods
                              .filter((m) => m.type === 'nequi')
                              .map((method) => (
                                <div
                                  key={method.id}
                                  className="flex items-center gap-3 p-2 hover:bg-white/[0.05] rounded justify-between"
                                >
                                  <div className="flex items-center gap-3">
                                    <Checkbox
                                      isSelected={
                                        selectedPaymentMethod?.id === method.id
                                      }
                                      onChange={(e) =>
                                        handleSelectPaymentMethod(method, e)
                                      }
                                    />
                                    <div>
                                      <p>Nequi</p>
                                      <p className="text-sm text-gray-400">
                                        {method.details.phoneNumber}
                                      </p>
                                    </div>
                                  </div>
                                  <Button
                                    isIconOnly
                                    variant="light"
                                    color="danger"
                                    size="sm"
                                    onClick={(e) =>
                                      handleDeleteMethod(method.id, e)
                                    }
                                  >
                                    <IconX size={16} />
                                  </Button>
                                </div>
                              ))}
                            <Button
                              variant="light"
                              size="sm"
                              className="mt-2"
                              startContent={<IconPlus size={16} />}
                              onClick={handleAddClick}
                            >
                              Agregar nuevo número
                            </Button>
                          </>
                        ) : (
                          <>
                            <p className="text-gray-400 text-sm">
                              No tienes métodos Nequi guardados
                            </p>
                            <Button
                              variant="light"
                              size="sm"
                              className="mt-2"
                              startContent={<IconPlus size={16} />}
                              onClick={handleAddClick}
                            >
                              Agregar nuevo número
                            </Button>
                          </>
                        )}

                        {showAddForm && renderPaymentMethodForm()}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-5">
                <Button
                  variant="flat"
                  color="danger"
                  radius="sm"
                  onPress={clearCart}
                >
                  Vaciar carrito
                </Button>

                <Popover
                  isOpen={isPopoverOpen}
                  onOpenChange={setIsPopoverOpen}
                  placement="top-end"
                  backdrop="opaque"
                  radius="sm"
                  size="lg"
                >
                  <PopoverTrigger>
                    <Button
                      color="primary"
                      radius="sm"
                      disabled={
                        !paymentMethodType ||
                        (!selectedPaymentMethod && paymentMethodType !== 'cash')
                      }
                    >
                      Continuar (${total.toLocaleString()})
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl border border-white/10 shadow-2xl">
                    <OrderConfirmation
                      total={total}
                      totalItems={totalItems}
                      paymentMethod={selectedPaymentMethod}
                      paymentMethodType={paymentMethodType}
                      onConfirm={async () => {
                        const success = await handleContinue();
                        if (success) {
                          toast.success('¡Pago realizado con éxito!');
                          // No cerramos inmediatamente para mostrar la factura
                        }
                        return success;
                      }}
                      onCancel={() => {
                        setIsPopoverOpen(false);
                        toast.info('Pago cancelado');
                      }}
                      onClose={handleCloseAfterPayment}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          </Card>
        </article>
      </div>
    </section>
  );
};

export default ShoppingCartPage;
