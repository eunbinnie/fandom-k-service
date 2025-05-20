'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { DonationData } from '@/types/donations.type';

interface IDonationSwiperProps {
  data?: DonationData[];
}

const DonationSwiper = ({ data }: IDonationSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={4}
      spaceBetween={24}
      className='w-full max-w-[1200px]'
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>{item.title}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DonationSwiper;
