import { create } from 'zustand';

interface IIdolData {
  id: number;
  group: string;
  name: string;
  profilePicture: string;
}

interface IIdolStoreActionProps {
  idols: IIdolData[];
  getIdols: () => IIdolData[];
  addIdol: (data: IIdolData) => void;
  deleteIdol: (data: IIdolData) => void;
}

export const useIdolStore = create<IIdolStoreActionProps>((set, get) => ({
  idols: [],
  getIdols: () => get().idols,
  addIdol: (data) =>
    set((state) => ({
      idols: [...state.idols, data],
    })),
  deleteIdol: (data: IIdolData) =>
    set((state) => ({
      idols: state.idols.filter((idol) => idol.id !== data.id),
    })),
}));
