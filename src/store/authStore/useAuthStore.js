import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      authStore: null,
      setAuthStore: (data) => set({ authStore: data }),
      logout: () => set({ authStore: null }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;
