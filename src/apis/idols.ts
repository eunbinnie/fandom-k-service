import type { IdolList } from '@/types/idols.interface';
import { type GetIdolsParams } from '@/types/idols.interface';

import instance from './axios';

export const getIdols = async (params: GetIdolsParams) => {
  try {
    const res = await instance.get<IdolList>('/api/idols', { params: params });
    const { data } = res;

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error('An unknown error occurred');
    }
  }
};
