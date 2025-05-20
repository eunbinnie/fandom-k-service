'use client';

import { getDonations } from '@/apis/donations';
import { useQuery } from '@tanstack/react-query';

import type { DonationsList } from '@/types/donations.type';

import Title from '@/components/common/Title';

import DonationSwiper from './DonationSwiper';

const DonationSection = () => {
  const { data, isLoading } = useQuery<DonationsList>({
    queryKey: ['donations'],
    queryFn: getDonations,
  });

  return (
    <section className='mt-10 sm:mt-16 lg:mt-[50px]'>
      <Title className='container'>후원을 기다리는 조공</Title>
      <div className='mt-4 sm:mt-6 lg:mt-8'>
        {isLoading ? (
          // TODO 스켈레톤으로 변경 필요
          <div className='container'>로딩 중</div>
        ) : (
          <DonationSwiper data={data?.list} />
        )}
      </div>
    </section>
  );
};

export default DonationSection;
