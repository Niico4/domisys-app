import { useNavigate } from 'react-router-dom';

import RecoverPasswordForm from '../../modules/auth/components/RecoverPasswordForm';

import LinkSentView from '@/modules/auth/components/LinkSentView';
import usePasswordRecovery from '@/hooks/usePasswordRecovery';
import { AuthLayout } from '@/components/layout/AuthLayout';
import { authPaths } from '@/constants/routerPaths';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const { email, isLinkSent, handleSubmit } = usePasswordRecovery();

  const handleBack = () =>
    navigate(`/${authPaths.root}/${authPaths.signIn}`, { replace: true });

  return (
    <AuthLayout
      title={isLinkSent ? 'Correo enviado' : 'Recuperar Contraseña'}
      subtitle={
        isLinkSent
          ? 'Revisa tu bandeja'
          : 'Recibe un enlace para reestablecer tu contraseña'
      }
    >
      {isLinkSent ? (
        <LinkSentView
          email={email}
          onResend={handleSubmit}
          onBack={handleBack}
        />
      ) : (
        <RecoverPasswordForm onSubmit={handleSubmit} onBack={handleBack} />
      )}
    </AuthLayout>
  );
};

export default ForgotPasswordPage;
