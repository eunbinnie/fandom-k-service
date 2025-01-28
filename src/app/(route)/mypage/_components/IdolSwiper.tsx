import { Swiper } from 'swiper/react';

import type { IdolList } from '@/types/idols.interface';

interface ISwiperData {
  isLoading: boolean;
  data: IdolList;
}

const IdolSwiper = ({ isLoading, data }: ISwiperData) => {
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

      {/* {Boolean(swiperIndex) && (
        <Arrow
          className='swiper-button-prev'
          onClick={prevPageData}
          imgSrc={leftArrow}
          position='left'
          alt='이전'
        />
      )}
      {nextCursor && (
        <Arrow
          className='swiper-button-next'
          onClick={() => swiperRef.slideNext()}
          imgSrc={rightArrow}
          position='right'
          alt='다음'
        />
      )} */}
    </div>
  );
};

export default IdolSwiper;
