import { create } from 'zustand';

import type { IdolData } from '@/types/idols.interface';

interface ISelectIdolStoreActionProps {
  idols: IdolData[];
  // favoriteIdols: IdolData[];
  addIdol: (data: IdolData) => void;
  deleteIdol: (data: IdolData) => void;
  reset: () => void;
  // updateLocalStorageData: (data: IdolData[]) => void;
}

// const initialState = {
//   idols: [],
//   favoriteIdols: [],
// };

export const useSelectIdolStore = create<ISelectIdolStoreActionProps>(
  (set) => ({
    idols: [],
    addIdol: (data) =>
      set((state) => ({
        idols: [...state.idols, data],
      })),
    deleteIdol: (data: IdolData) =>
      set((state) => ({
        idols: state.idols.filter((idol) => idol.id !== data.id),
      })),
    reset: () => set(() => ({ idols: [] })),
    // updateLocalStorageData: (data) =>
    //   set(() => ({
    //     favoriteIdols: data,
    //   })),
  }),
);
