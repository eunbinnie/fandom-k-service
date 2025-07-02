import { handleAxiosError } from '@/utils/handleAxiosError';

import type { IdolList } from '@/types/idols.type';
import { type GetIdolsParams } from '@/types/idols.type';

import instance from './axios';

export const getIdols = async (params: GetIdolsParams) => {
  try {
    const res = await instance.get<IdolList>('/api/idols', { params: params });
    const { data } = res;

    return data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
