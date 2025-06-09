import { useEffect, useState } from 'react';

import { useCreditStore } from '@/store';
import Image from 'next/image';

import type { DonationData } from '@/types/donations.type';

import Button from '@/components/button/Button';
import Input from '@/components/input/Input';

interface IDonationModalProps {
  item: DonationData;
}
/**
 * 후원하기 모달 컴포넌트
 */
const DonationModal = ({ item }: IDonationModalProps) => {
  const { title, subtitle, idol } = item;
  const { profilePicture, name } = idol;
  const myCredit = useCreditStore((state) => state.credit);

  const [amount, setAmmount] = useState<string>('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeCredit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAmmount(value);
  };

  useEffect(() => {
    const credit = Number(amount);

    if (credit > myCredit) {
      setError(true);
      setErrorMessage('갖고 있는 크레딧보다 더 많이 후원할 수 없어요');
    } else if (credit < 0) {
      setError(true);
      setErrorMessage('크레딧은 0 이상이어야 합니다.');
    } else {
      setError(false);
      setErrorMessage('');
    }
  }, [amount, myCredit]);

  return (
    <div className='mt-6 grid gap-6'>
      <div className='mx-auto grid content-center gap-[10px]'>
        <div className='relative mx-auto aspect-[158/206] w-full max-w-[158px] overflow-hidden rounded-lg'>
          <Image
            src={profilePicture}
            alt={`${name} 이미지`}
            fill
            priority
            sizes='max-width:100%'
          />
        </div>
        <div className='leading-none'>
          <span className='text-2xs text-white-pure opacity-40'>
            {subtitle}
          </span>
          <h4 className='mt-[6px] text-sm leading-4 text-white-primary'>
            {title}
          </h4>
        </div>
      </div>
      <Input
        id='credit'
        type='number'
        value={amount}
        placeholder='크레딧 입력'
        onChange={handleChangeCredit}
        error={error}
        errorMessage={errorMessage}
      />
      <Button
        onClick={() => {}}
        disabled={error || !amount}
        className='rounded-[3px]'
      >
        후원하기
      </Button>
    </div>
  );
};

export default DonationModal;
