'use client';

import { useFavoriteIdolStore } from '@/store';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IdolData } from '@/types/idols.interface';

import IdolCard from './IdolCard';

const FavoriteIdolList = () => {
  const favoriteIdols = useFavoriteIdolStore((state) => state.favoriteIdols);
  const deleteFavoriteIdols = useFavoriteIdolStore(
    (state) => state.deleteFavoriteIdols,
  );

  const handleDeleteButtonClick = (data: IdolData) => {
    deleteFavoriteIdols(data);
  };

  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView='auto'
      slidesPerGroup={1}
      spaceBetween={4}
      observer={true}
      observeParents={true}
      observeSlideChildren={true}
      autoplay={{ delay: 6000 }}
      breakpoints={{
        480: {
          spaceBetween: 24,
        },
      }}
    >
      {favoriteIdols.map((item) => (
        <SwiperSlide
          key={item.id}
          className='px-[14px] sm:px-0'
          style={{ width: '98px' }}
        >
          <IdolCard
            info={item}
            onClick={() => deleteFavoriteIdols(item)}
            remove
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default FavoriteIdolList;
