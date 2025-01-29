import '@/styles/globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Image from 'next/image';

import { cn } from '@/lib/styleUtils';

import Providers from './providers';

const pretendard = localFont({
  src: [
    {
      path: '../../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
    },
    {
      path: '../../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
    },
    {
      path: '../../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
    },
    {
      path: '../../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
    },
  ],
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'FANDOM-K',
  description: '당신의 아이돌에게 투표하세요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' className={cn(pretendard.variable)}>
      <body className='relative mx-auto bg-black-primary font-pretendard text-white-pure'>
        <Image
          src={'/icons/blue-graphic.svg'}
          alt='graphic'
          priority
          width={225}
          height={364}
          className='absolute -z-[1]'
        />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
