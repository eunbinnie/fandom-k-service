'use client';

import { useState } from 'react';

import { useCreditStore } from '@/store';
import Image from 'next/image';
import WhiteCreditIcon from 'public/icons/white-credit.svg';

import Button from '@/components/button/Button';

import CreditItem from './CreditItem';

const CREDIT_POINT = [{ point: 100 }, { point: 500 }, { point: 1000 }];

const ChargeCreditModal = () => {
  const chargeCredit = useCreditStore((state) => state.addCredit);
  const [selectedCredit, setSelectedCredit] = useState<number>(
    CREDIT_POINT[0].point,
  );

  return (
    <div className='mt-6'>
      <fieldset className='grid gap-2'>
        {CREDIT_POINT.map((item) => (
          <CreditItem
            key={item.point}
            credit={item.point}
            selectedCredit={selectedCredit}
            onClick={() => setSelectedCredit(item.point)}
          />
        ))}
        <Button
          type='submit'
          onClick={() => chargeCredit(selectedCredit)}
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
