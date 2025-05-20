import Image from 'next/image';
import CreditIcon from 'public/icons/credit.svg';

import { cn } from '@/lib/utils';

interface ICreditItemProps {
  credit: number;
  selectedCredit: number;
  onClick: () => void;
}

const CreditItem = ({ credit, selectedCredit, onClick }: ICreditItemProps) => {
  return (
    <label
      htmlFor={`${credit}point`}
      className={cn(
        'flex items-center justify-between gap-3 rounded-lg border px-5 py-[18px]',
        selectedCredit === credit
          ? 'border-brand-orange'
          : 'border-white-primary',
      )}
    >
      <div className='flex items-center gap-1'>
        <Image src={CreditIcon} alt='크레딧' width={22} height={26} />
        <span className='text-xl font-bold leading-[1.3]'>{credit}</span>
      </div>
      <input
        type='radio'
        id={`${credit}point`}
        name='credit'
        value={credit}
        checked={selectedCredit === credit}
        onChange={onClick}
      />
    </label>
  );
};

export default CreditItem;
