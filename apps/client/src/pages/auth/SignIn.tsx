import SignInForm from '@modules/auth/components/SignInForm';

import { AuthLayout } from '@/components/layout/AuthLayout';

const SignInPage = () => {
  return (
    <AuthLayout title="Iniciar Sesión" subtitle="Bienvenido de nuevo a DomiSys">
      <SignInForm />
    </AuthLayout>
  );
};

export default SignInPage;
