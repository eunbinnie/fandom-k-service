import type { IdolData } from '@/types/idols.interface';

export const LOCAL_STORAGE_KEY = 'favoriteIdol';

export const LOCAL_STORAGE_DATA: IdolData[] = JSON.parse(
  localStorage?.getItem(LOCAL_STORAGE_KEY) ?? '[]',
);
