'use client';

import { useState } from 'react';

import IdolSwiper from './IdolSwiper';

const IdolListSection = () => {
  // TODO zustand로 변경
  // const [params, setParams] = useState<GetIdolsParams>({
  //   cursor: 0,
  //   pageSize: 16,
  // });
  const [pageSize, setPageSize] = useState(16);

  return (
    <section>
      <h2 className='title'>관심 있는 아이돌을 추가해보세요.</h2>
      <div className='mt-4 sm:mt-14 lg:mt-8'>
        <IdolSwiper pageSize={pageSize} />
      </div>
    </section>
  );
};

export default IdolListSection;
