import { create } from 'zustand';
import { toast } from 'sonner';

import { mockUsers } from '@/constants/mock/mock-users';

export type User = {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  isDelivery: boolean;
};

type AuthStore = {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  signUp: (newUser: Omit<User, 'id'>) => Promise<boolean>;
};

export const useAuthStore = create<AuthStore>()((set, get) => ({
  user: null,
  token: null,
  isLoading: false,

  login: async (email, password) => {
    set({ isLoading: true });

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));

      const foundUser = mockUsers.find(
        (user) => user.email === email && user.password === password,
      );

      if (!foundUser) {
        toast.error('Credenciales inválidas');
        return false;
      }

      set({
        user: foundUser,
        token: 'mock-jwt-token',
        isLoading: false,
      });

      toast.success('¡Bienvenido de vuelta!');
      return true;
    } catch (error) {
      console.error(error);
      toast.error('Error al iniciar sesión');
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  signUp: async (newUser) => {
    set({ isLoading: true });

    try {
      if (mockUsers.some((user) => user.email === newUser.email)) {
        toast.warning('El email ya está registrado');
        return false;
      }

      const userWithId = {
        ...newUser,
        id: crypto.randomUUID(),
      };

      set({ user: userWithId });
      toast.success('¡Registro exitoso!');
      return true;
    } catch (error) {
      console.error(error);
      toast.error('Error al registrarse');
      return false;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    set({ user: null, token: null });
    toast.info('Sesión cerrada');
  },

  updateUser: (data) => {
    const { user } = get();
    if (!user) {
      toast.error('No hay usuario activo');
      return;
    }

    const updatedUser = { ...user, ...data };

    set({ user: updatedUser });
    toast.success('Perfil actualizado');
    return true;
  },
}));
