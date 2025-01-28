const MyPage = () => {
  return (
    <div className='py-[75px] sm:py-[15px] sm:pb-[210px] sm:pt-[25px] md:pb-[80px] md:pt-[25px]'>
      {/* 관심있는 아이돌 */}
      {/* <section>
        <h1 className='mb-8 text-2xl font-bold leading-[1.08] text-[#f6f6f8] sm:mb-6 sm:text-xl sm:leading-[1.3] md:mb-4 md:text-base md:leading-[1.6]'>
          내가 관심있는 아이돌
        </h1>
        {localStorageData.length > 0 ? (
          <InterestIdolList
            localStorageData={localStorageData}
            deleteIdol={deleteIdol}
          />
        ) : (
          <p className='text-white break-keep py-9 text-center text-sm font-normal leading-[1.2] opacity-60'>
            관심있는 아이돌 목록에 추가해 보세요!
          </p>
        )}
      </section> */}
      <hr className='my-10 border-white-pure opacity-10 sm:my-8' />
      {/* 아이돌 목록 */}
      {/* <section>
        <h1 className='mb-8 text-2xl font-bold leading-[1.08] text-[#f6f6f8] sm:mb-6 sm:text-xl sm:leading-[1.3] md:mb-4 md:text-base md:leading-[1.6]'>
          관심 있는 아이돌을 추가해보세요.
        </h1>
        <IdolSwiper
          idolPageData={idolPageData}
          isLoading={isLoading}
          dataCount={dataCount}
          nextCursorProps={{
            nextCursor: nextCursor,
            setNextCursor: setNextCursor,
          }}
          handleSlideChange={handleSlideChange}
          handleClickIdolList={handleClickIdolList}
          selectedIdols={selectedIdols}
        />
      </section> */}
      {/* <button
        onClick={addIdols}
        className='text-white mt-10 flex w-[255px] max-w-full justify-center gap-2 rounded-[24px] border-none bg-gradient-to-r from-[#f77063] to-[#fe5790] py-[11px] text-base font-bold leading-[1.6]'
      >
        <div className='h-6 w-6'>
          <img src={plusIcon} alt='+' />
        </div>
        <span className='font-bold'>추가하기</span>
      </button> */}
    </div>
  );
};

export default MyPage;
