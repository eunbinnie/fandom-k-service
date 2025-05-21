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
        <DonationSwiper data={data?.list} isLoading={isLoading} />
      </div>
    </section>
  );
};

export default DonationSection;
