import { create } from "zustand";

const useSigninStore = create((set) => ({
  user: {
    email: "",
    password: "",
  },
  setUser: (data) => set({ user: data }),
}));

export default useSigninStore;