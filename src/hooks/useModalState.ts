import { useState } from 'react';

const useModalState = () => {
  const [active, setActive] = useState(false);

  const handleModalOpen = () => setActive(true);

  const handleModalClose = () => setActive(false);

  return { active, handleModalOpen, handleModalClose };
};

export default useModalState;
