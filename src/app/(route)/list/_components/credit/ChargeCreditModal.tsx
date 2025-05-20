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
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedCredit, setSelectedCredit] = useState<number>(
    CREDIT_POINT[0].point,
  );

  const handleChargeCredit = () => {
    chargeCredit(selectedCredit);
    setMessage(`${selectedCredit} 크레딧 충전이 완료되었습니다! 🎉`);
    setLoading(true);
    setSelectedCredit(CREDIT_POINT[0].point);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='mt-6'>
      {message && (
        <p className='mb-2 text-center text-xs text-white-secondary'>
          {message}
        </p>
      )}
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
          disabled={loading}
          onClick={handleChargeCredit}
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
