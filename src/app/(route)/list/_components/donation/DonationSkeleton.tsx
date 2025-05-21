const DonationSkeleton = () => {
  return (
    <>
      <div className='skeleton-style aspect-[282/293] overflow-hidden rounded-lg'></div>
      <div className='mt-[10px] grid gap-3 sm:mt-3 sm:gap-2'>
        <div className='skeleton-style h-3 w-20 rounded-full sm:h-4'></div>
        <div className='skeleton-style h-[14px] w-full rounded-full sm:h-[18px]'></div>
      </div>
      <div className='mt-5 grid gap-[7px] sm:mt-6'>
        <div className='flex items-center justify-between'>
          <div className='skeleton-style h-3 w-10 rounded-full'></div>
          <div className='skeleton-style h-3 w-12 rounded-full'></div>
        </div>
        <div className='skeleton-style h-[1px] w-full rounded-full'></div>
      </div>
    </>
  );
};

export default DonationSkeleton;
