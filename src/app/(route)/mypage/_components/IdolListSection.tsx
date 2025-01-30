'use client';

import { useState } from 'react';

import { useIdolStore } from '@/store';
import Image from 'next/image';
import addIcon from 'public/icons/add.svg';

import type { IdolData } from '@/types/idols.interface';

import Button from '@/components/button/Button';

import { LOCAL_STORAGE_KEY } from '../_constants/mypage.constants';

import IdolSwiper from './IdolListSwiper';

const IdolListSection = () => {
  const [pageSize, setPageSize] = useState(16);
  const idols = useIdolStore((state) => state.idols);
  const reset = useIdolStore((state) => state.reset);
  // const updateLocalStorageData = useIdolStore(
  //   (state) => state.updateLocalStorageData,
  // );

  const handleClickAddButton = () => {
    const localStorageData: IdolData[] = JSON.parse(
      localStorage?.getItem(LOCAL_STORAGE_KEY) ?? '[]',
    );

    const newIdols = idols.filter(
      (idol) => !localStorageData.some((item) => item.id === idol.id),
    );

    if (newIdols.length > 0) {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify([...localStorageData, ...newIdols]),
      );
    }

    // updateLocalStorageData([...localStorageData, ...newIdols]);
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
