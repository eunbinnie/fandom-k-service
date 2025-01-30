interface IdolListSkeletonProps {
  pageSize: number;
}

const IdolListSkeleton = ({ pageSize = 16 }: IdolListSkeletonProps) => {
  return (
    <>
      {Array.from({ length: pageSize }).map((_, index) => {
        return (
          <div key={index} className='grid gap-[14px]'>
            <div className='skeleton-style aspect-square w-full overflow-hidden rounded-full p-[5px]' />
            <div className='grid gap-2 text-center'>
              <div className='skeleton-style mx-auto h-4 w-[50px] rounded-[7px] p-[6.5px_0]'>
                <div className='h-full' />
              </div>
              <div className='skeleton-style mx-auto h-[14px] w-[70px] rounded-[5px]' />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default IdolListSkeleton;
