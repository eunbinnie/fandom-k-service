import { handleAxiosError } from '@/utils/handleAxiosError';

import type { DonationsList } from '@/types/donations.type';

import instance from './axios';

// 후원 목록 가져오기
export const getDonations = async () => {
  try {
    const res = await instance.get<DonationsList>('/api/donations');
    const { data } = res;

    return data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};

/**
 * 후원하기
 * @param donationId 후원 ID
 * @param amount 후원 데이터
 */
export const putDonation = async (donationId: number, amount: number) => {
  try {
    const res = await instance.put(`/api/donations/${donationId}/contribute`, {
      amount,
    });

    return res.data;
  } catch (error) {
    handleAxiosError(error);
    throw error;
  }
};
