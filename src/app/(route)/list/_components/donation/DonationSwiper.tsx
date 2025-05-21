'use client';

import useComponentMount from '@/hooks/useComponentMount';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { DonationData } from '@/types/donations.type';

import DonationItemCard from './DonationItemCard';
import DonationSkeleton from './DonationSkeleton';

interface IDonationSwiperProps {
  data?: DonationData[];
  isLoading: boolean;
}

const DonationSwiper = ({ data, isLoading }: IDonationSwiperProps) => {
  const isMounted = useComponentMount();
  const isLoadingState = !isMounted || isLoading;

  if (!isMounted)
    return (
      <div className='donation-list container'>
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index}>
            <DonationSkeleton />
          </div>
        ))}
      </div>
    );

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
      <>
        {isLoadingState ? (
          <>
            {Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index}>
                <DonationSkeleton />
              </SwiperSlide>
            ))}
          </>
        ) : (
          <>
            {data?.map((item) => (
              <SwiperSlide key={item.id}>
                <DonationItemCard item={item} />
              </SwiperSlide>
            ))}
          </>
        )}
      </>
    </Swiper>
  );
};

export default DonationSwiper;
