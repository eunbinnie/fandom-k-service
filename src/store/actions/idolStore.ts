import { create } from 'zustand';

import type { IdolData } from '@/types/idols.interface';

interface IIdolStoreActionProps {
  idols: IdolData[];
  addIdol: (data: IdolData) => void;
  deleteIdol: (data: IdolData) => void;
  reset: () => void;
}

const initialState = {
  idols: [],
};

export const useIdolStore = create<IIdolStoreActionProps>((set) => ({
  ...initialState,
  addIdol: (data) =>
    set((state) => ({
      idols: [...state.idols, data],
    })),
  deleteIdol: (data: IdolData) =>
    set((state) => ({
      idols: state.idols.filter((idol) => idol.id !== data.id),
    })),
  reset: () => set(() => ({ ...initialState })),
}));
