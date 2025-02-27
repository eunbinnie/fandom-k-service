'use client';

import useComponentMount from '@/hooks/useComponentMount';
import useModalState from '@/hooks/useModalState';
import { useCreditStore } from '@/store';
import Image from 'next/image';
import Credit from 'public/icons/credit.svg';

import Modal from '@/components/modal/Modal';

const MyCreditSection = () => {
  const isMounted = useComponentMount();
  const { active, handleModalOpen, handleModalClose } = useModalState();
  const myCredit = useCreditStore((state) => state.credit).toLocaleString();

  return (
    <section>
      <div className='flex flex-wrap items-center justify-between gap-3 rounded-lg border border-white-lavendar p-5 sm:px-16 sm:py-9 lg:px-[78px] lg:pb-[42px] lg:pt-[30px]'>
        <div className='grid gap-2 sm:gap-[14px]'>
          <span className='text-2xs leading-normal opacity-60 sm:text-base sm:leading-normal'>
            내 크레딧
          </span>
          <div className='flex flex-wrap items-center gap-1'>
            <Image src={Credit} alt='크레딧' width={24} height={28} />
            {isMounted ? (
              <span className='text-xl font-bold leading-[1.3] opacity-90 sm:text-2xl'>
                {myCredit}
              </span>
            ) : (
              <div className='skeleton-style h-5 w-[60px] rounded-full sm:h-6 sm:w-20' />
            )}
          </div>
        </div>
        <button
          type='button'
          onClick={handleModalOpen}
          className='text-xs font-bold tracking-[0.65px] text-brand-orange sm:text-base sm:tracking-[0.8px] lg:mt-[11px]'
        >
          충전하기
        </button>
      </div>
      <Modal active={active} title='크레딧 충전하기' onClose={handleModalClose}>
        모달
      </Modal>
    </section>
  );
};

export default MyCreditSection;
