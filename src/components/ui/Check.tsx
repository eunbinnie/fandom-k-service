import Image from 'next/image';
import CheckIcon from 'public/icons/check.svg';

import { cn } from '@/lib/styleUtils';

interface ICheckProps {
  size: 'big' | 'small';
}

const Check = ({ size }: ICheckProps) => {
  return (
    <div className='absolute left-[5px] top-[5px] flex size-[calc(100%-10px)] items-center justify-center rounded-full bg-pink-background'>
      <div
        className={cn(
          'relative',
          size === 'big' ? 'size-10 sm:size-[54px]' : 'size-6',
        )}
      >
        <Image
          src={CheckIcon}
          alt='선택'
          fill
          priority
          sizes='max-width:100%'
        />
      </div>
    </div>
  );
};

export default Check;
