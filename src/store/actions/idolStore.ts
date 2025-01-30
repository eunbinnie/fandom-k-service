import { create } from 'zustand';

import type { IdolData } from '@/types/idols.interface';

// interface IIdolData {
//   id: number;
//   group: string;
//   name: string;
//   profilePicture: string;
// }

interface IIdolStoreActionProps {
  idols: IdolData[];
  getSelectedIdols: () => IdolData[];
  addIdol: (data: IdolData) => void;
  deleteIdol: (data: IdolData) => void;
}

export const useIdolStore = create<IIdolStoreActionProps>((set, get) => ({
  idols: [],
  getSelectedIdols: () => get().idols,
  addIdol: (data) =>
    set((state) => ({
      idols: [...state.idols, data],
    })),
  deleteIdol: (data: IdolData) =>
    set((state) => ({
      idols: state.idols.filter((idol) => idol.id !== data.id),
    })),
}));
