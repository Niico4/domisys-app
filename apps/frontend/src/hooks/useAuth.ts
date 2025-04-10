import { useAuthStore } from '@/store/useAuth.store';

const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const login = useAuthStore((state) => state.login);
  const signUp = useAuthStore((state) => state.signUp);
  const logout = useAuthStore((state) => state.logout);
  const updatedUser = useAuthStore((state) => state.updateUser);

  return {
    user,
    login,
    logout,
    updatedUser,
    signUp,
  };
};

export default useAuth;
