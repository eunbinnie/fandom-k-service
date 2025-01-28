import type { PropsWithChildren } from 'react';

import Header from '@/components/common/Header';

const PageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default PageLayout;
