import useModalState from '@/hooks/useModalState';
import Image from 'next/image';

import type { DonationData } from '@/types/donations.type';

import Button from '@/components/button/Button';
import Modal from '@/components/modal/Modal';

import DonationModal from './DonationModal';
import CreditIcon from '/public/icons/credit.svg';

interface IDonationItemCardProps {
  item: DonationData;
}

const DonationItemCard = ({ item }: IDonationItemCardProps) => {
  const { idol, subtitle, title, deadline, receivedDonations, targetDonation } =
    item;
  const { name, profilePicture } = idol;

  const { active, handleModalOpen, handleModalClose } = useModalState();

  // 후원 진행 비율
  const DONATION_RATIO = Math.min(
    Math.floor((receivedDonations / targetDonation) * 100),
    100,
  );

  // 후원 마감 날짜까지 남은 일 수
  const today = new Date();
  const endDate = new Date(deadline);
  const diffTime = endDate.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  const isExpired = diffDays < 0;

  return (
    <>
      <div className='relative aspect-[282/293] overflow-hidden rounded-lg text-white-primary'>
        <Image
          src={profilePicture}
          alt={`${name} 이미지`}
          fill
          priority
          sizes='max-width:100%'
          className='object-cover'
        />
        <div className='absolute inset-0 bg-card-background'></div>
        <Button
          onClick={handleModalOpen}
          className='absolute bottom-5 left-1/2 z-[1] w-[calc(100%-48px)] -translate-x-1/2 rounded-[3px]'
          disabled={isExpired}
        >
          {isExpired ? '후원 마감' : '후원하기'}
        </Button>
      </div>
      <div className='mt-[10px] grid gap-[6px] sm:mt-3 sm:gap-2'>
        <span className='truncate text-2xs leading-[1.1] text-white-pure/40 sm:text-base sm:leading-[1.1]'>
          {subtitle}
        </span>
        <h3 className='truncate text-sm font-medium leading-normal sm:text-lg'>
          {title}
        </h3>
      </div>
      <div className='mt-5 grid gap-[7px] sm:mt-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[2px]'>
            <Image
              src={CreditIcon}
              alt='크레딧 아이콘'
              width={16}
              height={16}
            />
            <span className='text-2xs text-brand-orange'>
              {`${receivedDonations.toLocaleString()} (${DONATION_RATIO}%)`}
            </span>
          </div>
          {isExpired ? (
            <span className='text-2xs'>후원 마감</span>
          ) : (
            <span className='text-2xs'>{diffDays}일 남음</span>
          )}
        </div>
        <div className='relative h-[1px] w-full rounded-full bg-white-pure'>
          {DONATION_RATIO && (
            <div
              className='absolute left-0 h-full rounded-full bg-brand-orange transition-all duration-300 ease-in-out'
              style={{ width: `${DONATION_RATIO}%` }}
            />
          )}
        </div>
      </div>
      <Modal
        active={active}
        onClose={handleModalClose}
        title='후원하기'
        className='max-w-[327px]'
      >
        <DonationModal item={item} />
      </Modal>
    </>
  );
};

export default DonationItemCard;
