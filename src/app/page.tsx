'use client';

import { LANDING_CONTENTS } from '@/constants/landing.constants';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LogoImage from 'public/icons/logo.svg';
import HeaderBackgroundImage from 'public/images/HeaderBackground.png';

import Button from '@/components/button/Button';

export default function LandingPage() {
  const router = useRouter();

  return (
    <main className='overflow-hidden'>
      <section className='mx-auto px-4 py-[100px] sm:py-[120px] lg:size-[1080px] lg:px-[74px] lg:pt-[95px]'>
        <div className='relative flex h-full max-w-[1080px] flex-col items-center justify-between lg:pt-[45px]'>
          <div>
            <p className='text-center text-xl font-normal sm:font-bold lg:text-3xl'>
              내가 좋아하는 아이돌을
              <br />
              가장 <span className='text-brand-orange'>쉽게 덕질</span> 하는
              방법
            </p>
            <h1 className='relative mt-5 aspect-[5.2419/1] w-full max-w-[236.645px] sm:mt-8 sm:w-[325.64px] sm:max-w-full lg:mt-[30px] lg:w-[509px]'>
              <Image
                src={LogoImage}
                alt='FANDOM-K'
                fill
                sizes='max-width:100%'
                priority
                className='cursor-pointer'
                onClick={() => router.push('/list')}
              />
            </h1>
          </div>
          <div className='relative -z-[2] aspect-[1.1935/1] w-full opacity-50 lg:absolute lg:top-0'>
            <Image
              src={HeaderBackgroundImage}
              alt='레드벨벳'
              fill
              priority
              sizes='max-width:100%'
            />
          </div>
          <div className='mt-9 flex w-full justify-center'>
            <Button
              onClick={() => router.push('/list')}
              className='w-full max-w-[230px] rounded-[3px] sm:max-w-[477px]'
            >
              지금 시작하기
            </Button>
          </div>
        </div>
      </section>
      <div className='relative py-[34px] sm:py-0'>
        <div className='absolute bottom-[45px] left-1/2 top-[215px] z-[1] h-[calc(100%-260px)] w-[117px] -translate-x-1/2 bg-blue-background sm:bottom-[105px] sm:top-[206px] sm:h-[calc(100%-311px)] lg:bottom-[200px] lg:top-[313px] lg:h-[calc(100%-513px)] lg:w-[187px]'></div>
        {LANDING_CONTENTS.map((item, index) => (
          <section
            key={item.title + index}
            className='relative mx-auto aspect-square w-full max-w-[1200px] pb-[43px] pt-[49px] sm:pb-[105px] sm:pt-[74px] lg:pb-[193px] lg:pt-40'
            style={{
              background: `linear-gradient(180deg, #02000E 9.38%, rgba(2, 0, 14, 0.50) 52.39%, #02000E 100%), ${item.backgroundImage}`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: '1200px',
            }}
          >
            <div className='absolute inset-0 bg-radial-background'></div>
            <div className='relative z-10 mx-auto flex flex-col items-center gap-10 px-[68px] text-center sm:px-0 lg:gap-[60px]'>
              <div className='grid gap-2 pb-2 pt-[10px] lg:pb-0'>
                <span className='font-medium text-brand-yellow'>
                  {item.title}
                </span>
                <p className='text-xl font-bold opacity-[0.87] lg:text-2xl lg:opacity-100'>
                  {item.contents1}
                  <br />
                  {item.contents2}
                </p>
              </div>
              <div>
                <img src={item.image} alt={`${item.title} 이미지`} />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
