'use client';

import Image from 'next/image';
import Credit from 'public/icons/credit.svg';

const MyCreditSection = () => {
  return (
    <section>
      <div className='flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white-lavendar p-5 sm:px-16 sm:py-9 lg:px-[78px] lg:pb-[42px] lg:pt-[30px]'>
        <div className='grid gap-2 sm:gap-[14px]'>
          <span className='text-2xs leading-normal opacity-60 sm:text-base sm:leading-normal'>
            내 크레딧
          </span>
          <div className='flex flex-wrap items-center gap-1'>
            <Image src={Credit} alt='크레딧' width={24} height={28} />
            <span className='text-xl font-bold leading-[1.3] opacity-[0.87] sm:text-2xl'>
              36,000
            </span>
          </div>
        </div>
        <button
          type='button'
          onClick={() => {
            alert('크레딧 충전 개발 예정');
          }}
          className='text-xs font-bold tracking-[0.65px] text-brand-orange sm:text-base sm:tracking-[0.8px] lg:mt-[11px]'
        >
          충전하기
        </button>
      </div>
    </section>
  );
};

export default MyCreditSection;
