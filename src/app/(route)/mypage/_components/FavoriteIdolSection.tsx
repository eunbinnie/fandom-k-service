'use client';

import { useIdolStore } from '@/store';

import FavoriteIdolList from './FavoriteIdolList';

const FavoriteIdolSection = () => {
  // const favoriteIdols = useIdolStore((state) => state.favoriteIdols);

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
      <h2 className='title'>내가 관심 있는 아이돌</h2>
      <div className='mt-3 text-center sm:mt-6 lg:mt-8'>
        {/* {favoriteIdols.length > 0 ? (
          <FavoriteIdolList />
        ) : ( */}
        <div className='my-10 inline-block'>
          <p className='break-keep text-center opacity-60'>
            아직 추가된 아이돌이 없어요.
            <br />
            관심 있는 아이돌을 선택해보세요!
          </p>
        </div>
        {/* )} */}
      </div>
    </section>
  );
};

export default FavoriteIdolSection;
