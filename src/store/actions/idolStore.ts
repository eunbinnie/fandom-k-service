import { create } from 'zustand';

import type { IdolData } from '@/types/idols.interface';

interface IIdolStoreActionProps {
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

export const useIdolStore = create<IIdolStoreActionProps>((set) => ({
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
}));
