const FavoriteIdolSection = () => {
  return (
    <section>
      {/* <section>
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
      <h2 className='title'>내가 관심있는 아이돌</h2>
      <div className='mt-3 sm:mt-6 lg:mt-8'></div>
    </section>
  );
};

export default FavoriteIdolSection;
