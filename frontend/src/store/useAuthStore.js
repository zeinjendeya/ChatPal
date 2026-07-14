import { create } from "zustand";

export const useAuthStore = create((set) => ({
  authUser: { name: "", email: "" },
  isLogged: false,

  login: () => {
    set({ isLogged: true });
  },
}));
