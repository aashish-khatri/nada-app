// State management using Zustand
import { create } from 'zustand';
import { User } from '../types';

interface UserState {
  currentUser: User | null;
  isAuthenticated: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currentUser: null,
  isAuthenticated: false,

  setUser: (user) => set({ currentUser: user, isAuthenticated: true }),

  logout: () => set({ currentUser: null, isAuthenticated: false }),

  updateProfile: (updates) =>
    set((state) => ({
      currentUser: state.currentUser
        ? { ...state.currentUser, ...updates }
        : null,
    })),
}));
