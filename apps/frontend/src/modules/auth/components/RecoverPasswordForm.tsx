// RecoverPasswordForm.tsx
import { FormEvent, useState } from 'react';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';

interface RecoverPasswordFormProps {
  onSubmit: (email: string) => Promise<void>;
  onBack: () => void;
}

const RecoverPasswordForm = ({
  onSubmit,
  onBack,
}: RecoverPasswordFormProps) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await onSubmit(email);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center gap-5 w-full"
    >
      <Input
        required
        size="sm"
        label="Correo electrónico"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full"
      />

      <div className="flex flex-col w-full gap-4">
        <Button
          type="submit"
          radius="sm"
          color="primary"
          fullWidth
          isLoading={isLoading}
        >
          Enviar Enlace
        </Button>
        <Button
          onPress={onBack}
          radius="sm"
          color="secondary"
          variant="flat"
          className="bg-secondary-600/10"
          fullWidth
        >
          Volver
        </Button>
      </div>
    </form>
  );
};

export default RecoverPasswordForm;
