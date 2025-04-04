import { AuthLayout } from '@/components/layout/AuthLayout';
import SignInForm from '@/modules/auth/components/SignInForm';

const SignInPage = () => {
  return (
    <AuthLayout title="Iniciar Sesión" subtitle="Bienvenido de nuevo a DomiSys">
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
