import FavoriteIdolSection from './_components/FavoriteIdolSection';
import IdolListSection from './_components/IdolListSection';

const MyPage = () => {
  return (
    <div className='container py-[75px] sm:py-[15px] sm:pb-[210px] sm:pt-[25px] md:pb-[80px] md:pt-[25px]'>
      <FavoriteIdolSection />
      <hr className='my-10 border-white-pure opacity-10 sm:my-8' />
      <IdolListSection />
    </div>
  );
};

export default MyPage;
