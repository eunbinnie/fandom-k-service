/**
 * useComponentMount Hook
 *
 * 이 훅은 컴포넌트가 마운트되었는지를 감지하고 해당 여부를 반환합니다.
 * 주로 클라이언트 사이드 렌더링(CSR) 여부를 확인할 때 사용됩니다.
 */

import { useEffect, useState } from 'react';

const useComponentMount = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted;
};

export default useComponentMount;
