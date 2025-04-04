import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@heroui/button';
import { Card } from '@heroui/card';
import { Input } from '@heroui/input';
import { toast } from 'sonner';

import Brand from '@/components/common/Brand';
import { authPaths } from '@/constants/routerPaths';
import { signInSchema, SignInType } from '@/constants/validations/auth/sign-in';

const SignInPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: SignInType) => {
    try {
      const response = {
        email: data.email,
        password: data.password,
      };

      // eslint-disable-next-line no-console
      console.log('Datos enviados', response);
      toast.success('Sesión iniciada');
      setTimeout(() => {
        navigate('/home', { replace: true });
      }, 2000);

      reset();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      toast.error('Error al iniciar sesión');
    }
  };

  return (
    <section className="w-full h-full md:h-screen grid place-content-center mx-auto">
      <div className="flex-col-center gap-3 p-6 w-fit mx-auto">
        <img src="/logo.webp" alt="Logo" className="size-12" />
        <Brand />
      </div>
      <Card
        className="min-w-[450px] max-w-[600px] p-10 surface-glass gap-6"
        radius="sm"
      >
        <div className="flex-col-center">
          <h1>Iniciar Sesión</h1>
          <p className="text-lg">Bienvenido de nuevo a DomiSys</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex flex-col gap-4 w-full">
            <Input
              required
              size="sm"
              label="Correo electrónico"
              type="email"
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
              {...register('email')}
            />
            <Input
              required
              size="sm"
              label="Contraseña"
              type="password"
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
              {...register('password')}
            />
          </div>
          <div className="flex items-center justify-end w-full">
            <Link
              className="text-sm text-primary opacity-80 hover:opacity-100 transition-all"
              to={`/${authPaths.root}/${authPaths.recoverPassword}`}
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <Button fullWidth radius="sm" color="primary" type="submit">
            Iniciar Sesión
          </Button>
          <p className="text-sm">
            ¿No tienes una cuenta?{' '}
            <Link
              className="text-primary underline opacity-80 hover:opacity-100 transition-all"
              to={`/${authPaths.root}/${authPaths.signUp}`}
            >
              Crear una cuenta
            </Link>
          </p>
        </form>
      </Card>
    </section>
  );
};

export default SignInPage;
