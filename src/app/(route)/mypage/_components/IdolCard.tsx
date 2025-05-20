'use client';

import { useEffect, useState } from 'react';

import { useSelectIdolStore } from '@/store';
import Image from 'next/image';
import deleteIcon from 'public/icons/delete.svg';

import { cn } from '@/lib/styleUtils';

import type { IdolData } from '@/types/idols.type';

import Check from '@/components/ui/Check';

interface IdolCardProps {
  info: IdolData;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  remove?: boolean;
  selectMode?: boolean;
}

const IdolCard = ({ info, onClick, remove, selectMode }: IdolCardProps) => {
  const { profilePicture, name, group, id } = info;
  const [isSelected, setIsSelected] = useState(false);
  const idols = useSelectIdolStore((state) => state.idols);

  useEffect(() => {
    setIsSelected(idols.some((idol) => idol.id === id));
  }, [idols, id]);

  return (
    <div className='relative grid gap-2'>
      <button
        className={cn(
          'relative aspect-square size-full overflow-hidden rounded-full border-[1.3px] border-brand-red',
          remove && 'pointer-events-none',
        )}
        onClick={onClick}
      >
        <Image
          src={profilePicture}
          alt={name}
          className='h-full w-full rounded-full object-cover p-[5px]'
          fill
          priority
          sizes='max-width:100%'
          quality={1}
        />
        {isSelected && selectMode && (
          <div className='absolute inset-0 flex items-center justify-center p-[5px]'>
            <Check size='big' />
          </div>
        )}
      </button>
      <div className='grid gap-[2px] text-center'>
        <h5 className='overflow-hidden text-ellipsis whitespace-nowrap break-all text-[16px] font-bold leading-[1.6] text-[#f4efef]'>
          {name}
        </h5>
        <h6 className='text-white overflow-hidden text-ellipsis whitespace-nowrap break-all text-[14px] font-normal leading-[1.2] opacity-60'>
          {group}
        </h6>
      </div>
      {remove && (
        <button
          onClick={onClick}
          className='absolute right-0 top-0 flex aspect-square size-[22px] items-center justify-center sm:size-8'
        >
          <Image
            src={deleteIcon}
            alt='삭제'
            fill
            priority
            sizes='max-width:100%'
          />
        </button>
      )}
    </div>
  );
};

export default IdolCard;
