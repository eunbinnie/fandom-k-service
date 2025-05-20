'use client';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { DonationData } from '@/types/donations.type';

import DonationItemCard from './DonationItemCard';

interface IDonationSwiperProps {
  data?: DonationData[];
}

const DonationSwiper = ({ data }: IDonationSwiperProps) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={1}
      spaceBetween={8}
      className='mx-auto w-full max-w-[1248px] !px-6'
      breakpoints={{
        448: {
          slidesPerView: 2,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
    >
      {data?.map((item) => (
        <SwiperSlide key={item.id}>
          <DonationItemCard item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default DonationSwiper;
