import Title from '@/components/common/Title';

const DonationSection = () => {
  return (
    <section className='mt-10 sm:mt-16 lg:mt-[50px]'>
      <Title className='container'>후원을 기다리는 조공</Title>
      <div className='mt-4 sm:mt-6 lg:mt-8'>
        {/* TODO 조공 api get해서 swiper로 뿌려줘야 함 */}
      </div>
    </section>
  );
};

export default DonationSection;
