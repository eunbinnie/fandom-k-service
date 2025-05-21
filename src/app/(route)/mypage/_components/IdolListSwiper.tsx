'use client';

import { useEffect, useRef, useState } from 'react';

import { getIdols } from '@/apis/idols';
import useComponentMount from '@/hooks/useComponentMount';
import useWindowSize from '@/hooks/useWindowSize';
import { useSelectIdolStore } from '@/store';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import ArrowLeft from 'public/icons/arrow-left.svg';
import ArrowRight from 'public/icons/arrow-right.svg';
import type { Swiper as SwiperClass } from 'swiper';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import type { IdolList } from '@/types/idols.type';
import { type IdolData } from '@/types/idols.type';

import IdolCard from './IdolCard';
import IdolListSkeleton from './IdolListSkeleton';

interface IdolSwiperProps {
  pageSize: number;
}

const IdolSwiper = ({ pageSize }: IdolSwiperProps) => {
  const isMounted = useComponentMount();
  const windowSize = useWindowSize();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideCount, setSlideCount] = useState(0);
  const [isPc, setIsPc] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const idols = useSelectIdolStore((state) => state.idols);
  const addIdol = useSelectIdolStore((state) => state.addIdol);
  const deleteIdol = useSelectIdolStore((state) => state.deleteIdol);

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetched,
    isFetching,
    isLoading,
  } = useInfiniteQuery<IdolList>({
    queryKey: ['idols'],
    queryFn: ({ pageParam = 0 }) =>
      getIdols({ cursor: Number(pageParam), pageSize: pageSize }),
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
  });

  const isLoadingState = !isMounted || isLoading;
  const shouldShowSkeleton = !isFetched || isFetching || isFetchingNextPage;

  const isLastSlide = !hasNextPage && activeIndex + 1 === slideCount;

  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveIndex(swiper.activeIndex);

    const isLastActiveSlide = swiper.activeIndex + 1 === slideCount;

    if (hasNextPage && isLastActiveSlide) {
      fetchNextPage();
    }
  };

  const handleIdolClick = (data: IdolData) => {
    const isSelectedIdol = idols.some((idol) => idol.id === data.id);

    return isSelectedIdol ? deleteIdol(data) : addIdol(data);
  };

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
      setSlideCount(swiperRef.current.slides.length);
    }
  }, [data]);

  useEffect(() => {
    if (isFetched && hasNextPage) {
      fetchNextPage();
    }
  }, [isFetched, hasNextPage, fetchNextPage]);

  useEffect(() => {
    setIsPc(windowSize > 480);
  }, [windowSize]);

  return (
    <div className='relative w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={22}
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={handleSlideChange}
        modules={[Navigation]}
      >
        <div className='idol-list'>
          {isLoadingState && <IdolListSkeleton pageSize={pageSize} />}
        </div>
        {data?.pages.map((page, idx) => (
          <SwiperSlide key={idx}>
            <div className='idol-list'>
              {shouldShowSkeleton ? (
                <IdolListSkeleton pageSize={pageSize} />
              ) : (
                <>
                  {page.list.map((idol: IdolData) => (
                    <IdolCard
                      key={idol.id}
                      info={idol}
                      onClick={() => handleIdolClick(idol)}
                      selectMode
                    />
                  ))}
                </>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {activeIndex > 0 && isPc && (
        <button
          ref={prevRef}
          className='swiper-arrow swiper-left'
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <Image src={ArrowLeft} alt='이전' width={29} height={135} priority />
        </button>
      )}
      {!isLastSlide && isPc && (
        <button
          ref={nextRef}
          className='swiper-arrow swiper-right'
          onClick={() => swiperRef.current?.slideNext()}
        >
          <Image src={ArrowRight} alt='다음' width={29} height={135} priority />
        </button>
      )}
    </div>
  );
};

export default IdolSwiper;
