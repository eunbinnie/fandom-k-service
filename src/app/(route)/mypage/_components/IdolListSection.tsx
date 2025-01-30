'use client';

import { useState } from 'react';

import { useFavoriteIdolStore, useSelectIdolStore } from '@/store';
import Image from 'next/image';
import addIcon from 'public/icons/add.svg';

import Button from '@/components/button/Button';

import IdolSwiper from './IdolListSwiper';

const IdolListSection = () => {
  const [pageSize, setPageSize] = useState(16);
  const idols = useSelectIdolStore((state) => state.idols);
  const reset = useSelectIdolStore((state) => state.reset);
  const favoriteIdols = useFavoriteIdolStore((state) => state.favoriteIdols);
  const addFavoriteIdols = useFavoriteIdolStore(
    (state) => state.addFavoriteIdols,
  );

  const handleClickAddButton = () => {
    const newIdols = idols.filter(
      (idol) => !favoriteIdols.some((item) => item.id === idol.id),
    );

    addFavoriteIdols(newIdols);
    reset();
  };

  return (
    <section>
      <h2 className='title'>관심 있는 아이돌을 추가해보세요.</h2>
      <div className='mt-4 sm:mt-14 lg:mt-8'>
        <IdolSwiper pageSize={pageSize} />
      </div>
      <div className='mt-6 flex items-center justify-center sm:mt-10 lg:mt-12'>
        <Button
          onClick={handleClickAddButton}
          isRounded
          className='flex max-w-[255px] items-center justify-center gap-2 py-[10px] text-base'
        >
          <Image src={addIcon} alt='+' width={24} height={24} />
          <span>추가하기</span>
        </Button>
      </div>
    </section>
  );
};

export default IdolListSection;
