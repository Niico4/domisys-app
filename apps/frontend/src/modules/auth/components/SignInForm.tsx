import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

import { signInSchema } from '../validations/auth.schema';

import { paths } from '@/constants/routerPaths';
import { AuthBase } from '@/modules/auth/types/auth';

const SignInForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuthBase>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: AuthBase) => {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-5"
    >
      <div className="flex flex-col gap-4 w-full">
        <Input
          size="sm"
          label="Correo electrónico"
          type="email"
          isRequired
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message}
          {...register('email')}
        />
        <Input
          size="sm"
          label="Contraseña"
          type="password"
          isRequired
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
      </div>
      <div className="flex items-center justify-end w-full">
        <Link
          className="text-sm text-primary opacity-80 hover:opacity-100 transition-all"
          to={`/${paths.root}/${paths.recoverPassword}`}
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
          to={`/${paths.root}/${paths.signUp}`}
        >
          Crear una cuenta
        </Link>
      </p>
    </form>
  );
};

export default SignInForm;
