import { getIdols } from '@/apis/idols';
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from 'next/image';
import ArrowLeft from 'public/icons/arrow-left.svg';
import ArrowRight from 'public/icons/arrow-right.svg';
import { Swiper, SwiperSlide } from 'swiper/react';

import type { IdolList } from '@/types/idols.interface';
import { type IdolData } from '@/types/idols.interface';

import IdolCard from './IdolCard';

interface IdolSwiperProps {
  pageSize: number;
}

const IdolSwiper = ({ pageSize }: IdolSwiperProps) => {
  // const { data, isLoading, isSuccess } = useQuery({
  //   queryKey: ['idols', params],
  //   queryFn: () => getIdols(params),
  // });
  const { data, fetchNextPage, hasNextPage, isFetching, hasPreviousPage } =
    useInfiniteQuery<IdolList>({
      queryKey: ['idols'],
      queryFn: ({ pageParam = 0 }) =>
        getIdols({ cursor: pageParam as number, pageSize: pageSize }),
      initialPageParam: 0,
      getNextPageParam: (lastPage) => lastPage.nextCursor ?? false,
    });

  return (
    <div className='relative w-full'>
      <Swiper
        slidesPerView={1}
        spaceBetween={22}
        observer={true}
        observeParents={true}
        observeSlideChildren={true}
        // onSwiper={(swiper) => {
        //   setSwiperRef(swiper);
        //   setSwiperIndex(swiper.activeIndex);
        // }}
        // onSlideChange={(swiper) => {
        //   setSwiperIndex(swiper.activeIndex);
        //   handleSlideChange(swiper);
        // }}
        // navigation={{
        //   prevEl: '.swiper-button-prev',
        //   nextEl: '.swiper-button-next',
        // }}
        // modules={[Navigation]}
      >
        <SwiperSlide>
          {data?.pages.map((page, pageIndex) => (
            <div key={pageIndex} className='idol-list'>
              {page.list.map((idol: IdolData) => (
                <IdolCard key={idol.id} info={idol} padding={6.48} />
              ))}
            </div>
          ))}
        </SwiperSlide>
        {/* {idolPageData.length === 0 ? (
          isLoading ? (
            <div>
              로딩중
            </div>
          ) : null
        ) : (
          idolPageData?.map((slideData, slideIndex) => (
            <div className='swiper-slide' key={slideIndex}>
              {isLoading ? (
                <IdolListCardSkeleton count={dataCount} />
              ) : (
                <div className='grid w-full grid-cols-8 grid-rows-2 gap-x-[22px] gap-y-[31px] px-0 sm:grid-cols-6 sm:gap-x-[24px] sm:px-14 md:grid-cols-4 lg:grid-cols-3'>
                  {slideData.list.map((idol) => (
                    <IdolCard
                      key={idol.id}
                      info={idol}
                      padding='6.48'
                      chooseIdol={() => handleClickIdolList(idol)}
                      isSelected={selectedIdols.includes(idol.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        )} */}
      </Swiper>

      {hasPreviousPage && (
        <button
          className='swiper-button-prev swiper-arrow swiper-left'
          // onClick={prevPageData}
          // position='left'
        >
          <Image src={ArrowLeft} alt='이전' width={29} height={135} priority />
        </button>
      )}
      {hasNextPage && (
        <button
          className='swiper-button-next swiper-arrow swiper-right'
          // onClick={() => swiperRef.slideNext()}
          // position='right'
        >
          <Image src={ArrowRight} alt='다음' width={29} height={135} priority />
        </button>
      )}
    </div>
  );
};

export default IdolSwiper;
