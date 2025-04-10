import { create } from 'zustand';

import { mockUsers } from '@/constants/mock/mock-users';

type User = {
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
  login: (email: string, password: string) => boolean;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  signUp: (newUser: User) => void;
};

export const useAuthStore = create<AuthStore>((set, get) => ({
  user: null,
  login: (email, password) => {
    const foundUser = mockUsers.find(
      (user) => user.email === email && user.password === password,
    );

    if (foundUser) {
      set({ user: foundUser });
      return true;
    }

    return false;
  },
  signUp: (newUser: User) => {
    set({ user: newUser });
  },

  logout: () => set({ user: null }),
  updateUser: (data: Partial<User>) => {
    const { user } = get();
    if (!user) return;

    const updatedUser = { ...user, ...data };
    set({ user: updatedUser });
  },
}));
