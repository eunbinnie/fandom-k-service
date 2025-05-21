import type { DonationsList } from '@/types/donations.type';

import instance from './axios';

// 후원 목록 가져오기
export const getDonations = async () => {
  try {
    const res = await instance.get<DonationsList>('/api/donations');
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
