import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';
import { Checkbox } from '@heroui/checkbox';
import { IconLock } from '@tabler/icons-react';

import Brand from '@/components/common/Brand';
import { authPaths } from '@/constants/routerPaths';

const SignUpPage = () => {
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <section className="w-full h-full md:h-screen grid place-content-center mx-auto">
      <div className="flex-col-center gap-3 p-6 w-fit mx-auto">
        <img src="/logo.webp" alt="Logo" className="size-12" />
        <Brand />
      </div>
      <Card className="max-w-[600px] p-10 surface-glass gap-6" radius="sm">
        <div className="flex-col-center">
          <h1>Crear Cuenta</h1>
          <p className="text-lg">Únete a DomiSys hoy mismo</p>
        </div>

        <form action="" className="flex-col-center gap-5">
          <div className="flex-center gap-4">
            <Input required size="sm" label="Nombre" type="text" />
            <Input required size="sm" label="Apellido" type="text" />
          </div>
          <Input required size="sm" label="Correo electrónico" type="email" />
          <div className="flex-center gap-4">
            <Input required size="sm" label="Teléfono" type="text" />
            <Input required size="sm" label="Dirección" type="text" />
          </div>
          <div className="flex-center gap-4">
            <Input required size="sm" label="Contraseña" type="password" />
            <Input
              required
              size="sm"
              label="Repetir Contraseña"
              type="password"
            />
          </div>

          <div className="flex flex-col items-start justify-center gap-5 w-full">
            <Checkbox
              defaultSelected
              isSelected={isDelivery}
              onValueChange={setIsDelivery}
            >
              Repartidor
            </Checkbox>
            {isDelivery && (
              <div className="flex flex-col justify-center w-full gap-4 p-4 rounded-lg surface-glass">
                <p className="text-lg">Ingresa tu código de invitación</p>
                <Input
                  required
                  size="sm"
                  label="Código"
                  type="text"
                  endContent={<IconLock stroke={1.5} />}
                />
              </div>
            )}
          </div>

          <Button
            fullWidth
            radius="sm"
            color="primary"
            type="submit"
            className="mt-4"
          >
            Crear Cuenta
          </Button>
          <p className="text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link
              className="text-primary underline opacity-80 hover:opacity-100 transition-all"
              to={`/${authPaths.root}/${authPaths.signIn}`}
            >
              Iniciar sesión
            </Link>
          </p>
        </form>
      </Card>
    </section>
  );
};

export default SignUpPage;
