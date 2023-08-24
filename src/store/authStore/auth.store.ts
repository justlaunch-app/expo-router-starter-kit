import { create } from 'zustand';

type Credentials = {
  email: string;
  password: string;
};

type User = Credentials & {
  nickname: string;
};

type AuthError = {
  error: string;
};

interface AuthState {
  user: User | null;
  users: User[] | [];
  login: (credentials: Credentials) => undefined | AuthError;
  register: (user: User) => undefined | AuthError;
  logout: () => void;
  resetPassword: (email: string) => string | AuthError;
}

export const useAuth = create<AuthState>((set, get) => ({
  user: null,
  users: [],
  login(credentials) {
    const user = get().users?.find((user) => user.email === credentials.email);

    if (!user) {
      return {
        error: 'auth.errors.user-does-not-exist',
      };
    }

    const isValidPassword = user.password === credentials.password;
    if (!isValidPassword) {
      return {
        error: 'auth.errors.invalid-password',
      };
    }

    set({ user });
  },
  register(newUser) {
    const userAlreadyRegistered = get().users?.find(
      (user) => user.email === newUser.email
    );
    if (userAlreadyRegistered) {
      return {
        error: 'auth.errors.already-registered',
      };
    }

    set({ users: [...get().users, newUser] });
  },
  logout() {
    set({ user: null });
  },
  resetPassword(email) {
    const user = get().users?.find((user) => user.email === email);

    if (!user) {
      return {
        error: 'auth.errors.user-does-not-exist',
      };
    }

    const newPasswd = Math.random().toString(36);

    const updatedUsersList = get().users.map((user) => {
      if (user.email === email) {
        return { ...user, password: newPasswd };
      }
      return user;
    });

    set({ users: updatedUsersList });

    return newPasswd;
  },
}));
