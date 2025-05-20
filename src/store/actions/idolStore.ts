import { LOCAL_STORAGE_KEY } from '@/app/(route)/mypage/_constants/mypage.constants';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { IdolData } from '@/types/idols.type';

interface ISelectIdolStoreActionProps {
  idols: IdolData[];
  addIdol: (data: IdolData) => void;
  deleteIdol: (data: IdolData) => void;
  reset: () => void;
}

export const useSelectIdolStore = create<ISelectIdolStoreActionProps>(
  (set) => ({
    idols: [],
    addIdol: (data) =>
      set((state) => ({
        idols: [...state.idols, data],
      })),
    deleteIdol: (data) =>
      set((state) => ({
        idols: state.idols.filter((item) => item.id !== data.id),
      })),
    reset: () => set(() => ({ idols: [] })),
  }),
);

interface IFavoriteIdolStoreActionProps {
  favoriteIdols: IdolData[];
  addFavoriteIdols: (data: IdolData[]) => void;
  deleteFavoriteIdols: (data: IdolData) => void;
}

export const useFavoriteIdolStore = create(
  persist<IFavoriteIdolStoreActionProps>(
    (set) => ({
      favoriteIdols: [],
      addFavoriteIdols: (data) =>
        set((state) => ({
          favoriteIdols: [...state.favoriteIdols, ...data],
        })),
      deleteFavoriteIdols: (data) =>
        set((state) => ({
          favoriteIdols: state.favoriteIdols.filter(
            (item) => item.id !== data.id,
          ),
        })),
    }),
    {
      name: LOCAL_STORAGE_KEY,
    },
  ),
);
