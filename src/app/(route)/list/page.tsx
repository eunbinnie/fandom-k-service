import MyCreditSection from './_components/credit/MyCreditSection';
import DonationSection from './_components/donation/DonationSection';

const ListPage = () => {
  return (
    <>
      <div className='container mb-[60px] mt-4 lg:mt-[50px]'>
        <MyCreditSection />
      </div>
      <DonationSection />
    </>
  );
};

export default ListPage;
