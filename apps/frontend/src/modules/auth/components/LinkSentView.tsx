import { Button } from '@heroui/button';
import { useState } from 'react';

interface LinkSentViewProps {
  email: string;
  onResend: (email: string) => Promise<void>;
  onBack: () => void;
}

const LinkSentView = ({ email, onResend, onBack }: LinkSentViewProps) => {
  const [isResending, setIsResending] = useState(false);

  const handleResend = async () => {
    setIsResending(true);
    try {
      await onResend(email);
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="space-y-4 w-full">
      <p className="text-center">
        Hemos enviado un enlace para restablecer tu contraseña a{' '}
        <span className="text-secondary font-semibold">{email}</span>. El enlace
        expirará en 30 minutos.
      </p>

      <div className="flex flex-col w-full gap-4">
        <Button
          onPress={handleResend}
          radius="sm"
          color="primary"
          fullWidth
          isLoading={isResending}
        >
          Reenviar Enlace
        </Button>
        <Button
          onPress={onBack}
          radius="sm"
          color="secondary"
          variant="flat"
          className="bg-secondary-600/10"
          fullWidth
        >
          Volver al inicio de sesión
        </Button>
      </div>
    </div>
  );
};

export default LinkSentView;
