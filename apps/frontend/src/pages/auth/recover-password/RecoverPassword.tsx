import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { toast } from 'sonner';

import FormRecover from './FormRecover';

import Brand from '@/components/common/Brand';
import { authPaths } from '@/constants/routerPaths';

const ForgotPasswordPage = () => {
  const [sendLink, setSendLink] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(`/${authPaths.root}/${path}`, { replace: true });
  };

  const handleResendLink = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success('Enlace enviado');
      setSendLink(false);
    }, 2000);
  };

  return (
    <section className="w-full min-h-screen grid place-content-center mx-auto">
      <div className="flex-col-center gap-3 p-6 w-fit mx-auto">
        <img
          src="/logo.webp"
          alt="Logo"
          className="size-12"
          width={48}
          height={48}
          loading="lazy"
        />
        <Brand />
      </div>

      {sendLink ? (
        <Card className="max-w-[450px] p-10 surface-glass gap-6" radius="sm">
          <div className="flex-col-center">
            <h1 className="text-3xl mb-2">Correo Enviado</h1>
            <p className="text-lg">Revisa tu bandeja</p>
          </div>

          <p>
            Hemos enviado un enlace para restablecer tu contraseña a{' '}
            <span className="text-secondary font-semibold">
              correo@correo.com
            </span>
            . El enlace expirá en 30 minutos.
          </p>

          <div className="flex-col-center w-full gap-3">
            <Button
              onPress={handleResendLink}
              radius="sm"
              color="primary"
              type="submit"
              fullWidth
              isLoading={isLoading}
            >
              Reenviar Enlace
            </Button>
            <Button
              onPress={() => navigateTo(authPaths.signIn)}
              radius="sm"
              color="secondary"
              variant="flat"
              className="bg-secondary-600/10"
              fullWidth
            >
              Volver al inicio de sesión
            </Button>
          </div>
        </Card>
      ) : (
        <FormRecover
          sendLink={sendLink}
          setSendLink={setSendLink}
          onNavigate={navigateTo}
        />
      )}
    </section>
  );
};

export default ForgotPasswordPage;
