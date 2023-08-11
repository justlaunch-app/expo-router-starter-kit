import { create } from 'zustand';

type Credentials = {
  email: string;
  password: string;
};

interface AuthState {
  user: Credentials | null;
  login: (params: Credentials) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>((set) => ({
  user: null,
  login(params) {
    set({ user: { ...params } });
  },
  logout() {
    set({ user: null });
  },
}));
