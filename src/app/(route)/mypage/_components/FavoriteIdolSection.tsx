'use client';

import { useFavoriteIdolStore } from '@/store';

import FavoriteIdolList from './FavoriteIdolList';

const FavoriteIdolSection = () => {
  const favoriteIdols = useFavoriteIdolStore((state) => state.favoriteIdols);

  return (
    <section>
      <h2 className='title'>내가 관심 있는 아이돌</h2>
      <div className='mt-3 w-dvw text-center sm:mt-6 sm:w-full lg:mt-8'>
        {favoriteIdols.length > 0 ? (
          <FavoriteIdolList />
        ) : (
          <div className='my-10 inline-block'>
            <p className='break-keep text-center opacity-60'>
              아직 추가된 아이돌이 없어요.
              <br />
              관심 있는 아이돌을 선택해보세요!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FavoriteIdolSection;
