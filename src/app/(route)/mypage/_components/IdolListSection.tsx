'use client';

import { useState } from 'react';

import { getIdols } from '@/apis/idols';
import { useQuery } from '@tanstack/react-query';

import type { GetIdolsParams, IdolData } from '@/types/idols.interface';

import IdolCard from './IdolCard';
import IdolSwiper from './IdolSwiper';

const IdolListSection = () => {
  // TODO zustand로 변경
  const [params, setParams] = useState<GetIdolsParams>({
    cursor: 0,
    pageSize: 16,
  });

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ['idols', params],
    queryFn: () => getIdols(params),
  });

  return (
    <section>
      <h2 className='title'>관심 있는 아이돌을 추가해보세요.</h2>
      {/* <IdolSwiper isLoading={isLoading} data={data} /> */}
      {isSuccess && (
        <div className='idol-list'>
          {data?.list?.map((idol: IdolData) => (
            <IdolCard key={idol.id} info={idol} />
          ))}
        </div>
      )}
    </section>
  );
};

export default IdolListSection;
