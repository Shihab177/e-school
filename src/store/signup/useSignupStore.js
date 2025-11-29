import { create } from "zustand";

const useSignupStore = create((set) => ({
  user: {
    name: "",
    email: "",
    password: "",
  },
  setUser: (data) => set({ user: data }),
}));

export default useSignupStore;