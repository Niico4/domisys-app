import SignUpForm from '@modules/auth/components/SignUpForm';

import { AuthLayout } from '@/components/layout/AuthLayout';

const SignUpPage = () => {
  return (
    <AuthLayout title="Crear Cuenta" subtitle="Únete a DomiSys hoy mismo">
      <SignUpForm />
    </AuthLayout>
  );
};

export default SignUpPage;
