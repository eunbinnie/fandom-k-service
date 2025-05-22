import Image from 'next/image';

import type { DonationData } from '@/types/donations.type';

import Button from '@/components/button/Button';

interface IDonationModalProps {
  item: DonationData;
}
/**
 * 후원하기 모달 컴포넌트
 */
const DonationModal = ({ item }: IDonationModalProps) => {
  const { title, subtitle, idol } = item;
  const { profilePicture, name } = idol;

  return (
    <div className='mt-6 grid gap-6'>
      <div className='mx-auto grid content-center gap-[10px]'>
        <div className='relative mx-auto aspect-[158/206] w-[158px] overflow-hidden rounded-lg'>
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
      <Button onClick={() => {}} disabled={true} className='rounded-[3px]'>
        후원하기
      </Button>
    </div>
  );
};

export default DonationModal;
