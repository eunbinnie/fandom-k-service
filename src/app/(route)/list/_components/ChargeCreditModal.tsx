'use client';

import { useCreditStore } from '@/store';
import Image from 'next/image';
import CreditIcon from 'public/icons/credit.svg';
import WhiteCreditIcon from 'public/icons/white-credit.svg';

import { cn } from '@/lib/styleUtils';

import Button from '@/components/button/Button';

const CREDIT_POINT = [
  { point: 100, active: true },
  { point: 500, active: false },
  { point: 1000, active: false },
];

const ChargeCreditModal = () => {
  const chargeCredit = useCreditStore((state) => state.addCredit);

  return (
    <div className='mt-6'>
      <fieldset className='grid gap-2'>
        {CREDIT_POINT.map((item) => (
          <label
            key={item.point}
            htmlFor={`${item.point}point`}
            className={cn(
              'flex items-center justify-between gap-3 rounded-lg border px-5 py-[18px]',
              item.active ? 'border-brand-orange' : 'border-white-primary',
            )}
          >
            <div className='flex items-center gap-1'>
              <Image src={CreditIcon} alt='크레딧' width={22} height={26} />
              <span className='text-xl font-bold leading-[1.3]'>
                {item.point}
              </span>
            </div>
            <input
              type='radio'
              id={`${item.point}point`}
              name='credit'
              value={item.point}
            />
          </label>
        ))}
        <Button
          type='submit'
          onClick={() => {}}
          className='mt-6 flex items-center justify-center gap-1 rounded-lg py-2'
        >
          <Image src={WhiteCreditIcon} alt='크레딧' width={21} height={25} />
          <span className='text-sm font-bold'>충전하기</span>
        </Button>
      </fieldset>
    </div>
  );
};

export default ChargeCreditModal;
