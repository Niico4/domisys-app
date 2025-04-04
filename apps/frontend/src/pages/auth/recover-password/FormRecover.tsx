import { FormEvent, useState } from 'react';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';
import { toast } from 'sonner';

import { authPaths } from '@/constants/routerPaths';

const FormRecover = ({
  sendLink,
  setSendLink,
  onNavigate,
}: {
  sendLink: boolean;
  setSendLink: (value: boolean) => void;
  onNavigate: (path: string) => void;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Enlace enviado a ${email}`);
      setSendLink(!sendLink);
    }, 2000);
  };
  return (
    <Card className="max-w-[450px] p-10 surface-glass gap-6" radius="sm">
      <div className="flex-col-center">
        <h1 className="text-3xl mb-2">Recuperar Contraseña</h1>
        <p className="text-lg">
          Recibe un enlace para reestablecer tu contraseña
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-5"
      >
        <Input
          required
          size="sm"
          label="Correo electrónico"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="flex-col-center w-full gap-3">
          <Button
            radius="sm"
            color="primary"
            type="submit"
            fullWidth
            isLoading={isLoading}
          >
            Enviar Enlace
          </Button>
          <Button
            onPress={() => onNavigate(authPaths.signIn)}
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
    </Card>
  );
};

export default FormRecover;
