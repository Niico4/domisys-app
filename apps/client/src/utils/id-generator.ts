export const generateOrderId = () => {
  return `ORD-${crypto.randomUUID().slice(0, 5).toUpperCase()}`;
};
