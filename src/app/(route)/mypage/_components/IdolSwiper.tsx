'use client';

import { useRef, useState } from 'react';

import { getIdols } from '@/apis/idols';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import ArrowLeft from 'public/icons/arrow-left.svg';
import ArrowRight from 'public/icons/arrow-right.svg';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { IdolList } from '@/types/idols.interface';
import { type IdolData } from '@/types/idols.interface';

import IdolCard from './IdolCard';

interface IdolSwiperProps {
  pageSize: number;
}

const IdolSwiper = ({ pageSize }: IdolSwiperProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<IdolList>({
      queryKey: ['idols'],
      queryFn: ({ pageParam = 0 }) =>
        getIdols({ cursor: Number(pageParam), pageSize: pageSize }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextCursor,
    });

  const isLastSlide =
    !hasNextPage &&
    swiperRef.current?.slides &&
    activeIndex + 1 === swiperRef.current.slides.length;

  return (
    <div className='relative w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={22}
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Navigation]}
      >
        {data?.pages.map((page, idx) => (
          <SwiperSlide key={idx}>
            <div className='idol-list'>
              {isFetchingNextPage ? (
                <div>로딩 중</div>
              ) : (
                <>
                  {page.list.map((idol: IdolData) => (
                    <IdolCard key={idol.id} info={idol} padding={6.48} />
                  ))}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TODO arrow button 480px이하에서 언마운트 */}
      {activeIndex > 0 && (
        <button
          ref={prevRef}
          className='swiper-arrow swiper-left'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={ArrowLeft} alt='이전' width={29} height={135} priority />
        </button>
      )}
      {!isLastSlide && (
        <button
          ref={nextRef}
          className='swiper-arrow swiper-right'
          onClick={() => fetchNextPage()}
        >
          <Image src={ArrowRight} alt='다음' width={29} height={135} priority />
        </button>
      )}
    </div>
  );
};

export default IdolSwiper;
