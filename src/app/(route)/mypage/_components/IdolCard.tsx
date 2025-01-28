import Image from 'next/image';

import type { IdolData } from '@/types/idols.interface';

interface IdolCardProps {
  info: IdolData;
}

const IdolCard = ({ info }: IdolCardProps) => {
  const { profilePicture, name, group } = info;

  return (
    <div className='relative grid flex-shrink-0 gap-2'>
      <div
        className={`relative aspect-square h-full w-full cursor-pointer overflow-hidden rounded-full border-[1.3px] border-[#f77063]`}
        // style={{ padding: `${padding ?? 5}px` }}
        // onClick={handleCardClick}
      >
        <Image
          src={profilePicture}
          alt={name}
          className='h-full w-full rounded-full object-cover'
          fill
          priority
          sizes='max-width:100%'
          quality={1}
        />
        {/* {isSelected && isAddingMode && (
          <div
            className={`absolute inset-0 flex items-center justify-center`}
            style={{ padding: `${padding}px` }}
          >
            <Check padding={padding} />
          </div>
        )} */}
      </div>
      <div className='grid gap-[2px] text-center'>
        <h5 className='overflow-hidden text-ellipsis whitespace-nowrap break-all text-[16px] font-bold leading-[1.6] text-[#f4efef]'>
          {name}
        </h5>
        <h6 className='text-white overflow-hidden text-ellipsis whitespace-nowrap break-all text-[14px] font-normal leading-[1.2] opacity-60'>
          {group}
        </h6>
      </div>
      {/* {remove && (
        <button
          onClick={deleteIdol}
          className='bg-white absolute right-0 top-0 flex aspect-square items-center justify-center rounded-full border-[2.87px] border-[#02000e]'
        >
          <img src={deleteIcon} className='w-[8px] md:w-auto' />
        </button>
      )} */}
    </div>
  );
};

export default IdolCard;
