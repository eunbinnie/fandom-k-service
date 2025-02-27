import { useEffect, useState } from 'react';

const useModalState = () => {
  const [active, setActive] = useState(false);

  const handleModalOpen = () => setActive(true);

  const handleModalClose = () => setActive(false);

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : 'auto';
    document.body.style.paddingRight = active ? '10px' : '0';
  }, [active]);

  return { active, handleModalOpen, handleModalClose };
};

export default useModalState;
