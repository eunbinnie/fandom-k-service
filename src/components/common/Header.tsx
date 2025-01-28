import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/icons/logo.svg';
import Profile from 'public/icons/profile.svg';

const Header = () => {
  return (
    <header className='container flex items-center justify-between gap-1 pb-[6px] pt-[18px] sm:py-[30px]'>
      <div className='size-8' />
      <h1 className='relative aspect-[525/100] w-[108px] sm:w-[120px] lg:w-[168px]'>
        <Link href={'/list'} className='block h-full'>
          <Image
            src={Logo}
            alt='FANDOM-K'
            fill
            priority
            sizes='max-width:100%'
          />
        </Link>
      </h1>
      <Link href={'/mypage'}>
        <Image src={Profile} alt='마이페이지' width={32} height={32} priority />
      </Link>
    </header>
  );
};

export default Header;
