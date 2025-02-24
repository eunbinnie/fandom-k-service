import { useEffect, useState } from 'react';

import debounce from 'lodash.debounce';

const useWindowSize = (delay = 300) => {
  const [windowSize, setWindowSize] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );

  const handleResize = debounce(() => {
    setWindowSize(window.innerWidth);
  }, delay);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return windowSize;
};

export default useWindowSize;
