export const formatDate = (date: Date) => {
  return new Date(date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Formateador de número de tarjeta (espacios cada 4 dígitos)
export const formatCardNumber = (value?: string) => {
  if (!value) return '';
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = matches?.[0] || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  return parts.length > 0 ? parts.join(' ') : v;
};

// Formateador de fecha (autoinserta / después del mes)
export const formatExpiryDate = (value: string) => {
  const v = value.replace(/\D/g, '');
  if (v.length >= 3) {
    return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
  }
  return v;
};
