// usePasswordRecovery.ts
import { useState } from 'react';
import { toast } from 'sonner';

const usePasswordRecovery = () => {
  const [state, setState] = useState({
    email: '',
    isLoading: false,
    isLinkSent: false,
  });

  const handleSubmit = async (email: string): Promise<void> => {
    setState((prev) => ({ ...prev, isLoading: true, email }));

    try {
      // Simulación de llamada API
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setState((prev) => ({ ...prev, isLinkSent: true, isLoading: false }));
      toast.success(`Enlace enviado a ${email}`);
    } catch (error) {
      setState((prev) => ({ ...prev, isLoading: false }));
      toast.error('Error al enviar el enlace');
      throw error;
    }
  };

  return {
    email: state.email,
    isLoading: state.isLoading,
    isLinkSent: state.isLinkSent,
    handleSubmit,
  };
};

export default usePasswordRecovery;
