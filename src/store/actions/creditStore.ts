import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CreditStore {
  credit: number;
  addCredit: (data: number) => void;
}

export const useCreditStore = create<CreditStore>()(
  persist(
    (set, get) => ({
      credit: 0,
      addCredit: (data: number) => set({ credit: get().credit + data }),
    }),
    { name: 'credit' },
  ),
);
