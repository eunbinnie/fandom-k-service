import { useEffect, useState, type PropsWithChildren } from 'react';

import Image from 'next/image';
import CloseButton from 'public/icons/close.svg';

import { cn } from '@/lib/styleUtils';

import Portal from './Portal';

interface IModalProps extends PropsWithChildren {
  active: boolean;
  onClose: () => void;
  title?: string;
  className?: string;
}

const Modal = ({
  active,
  children,
  title,
  onClose,
  className,
}: IModalProps) => {
  const [visible, setVisible] = useState<boolean>(active);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (active) {
      setVisible(true);
    } else {
      timer = setTimeout(() => {
        setVisible(false);
      }, 300);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [active]);

  return (
    visible && (
      <Portal>
        <div className='fixed inset-0 fill-mode-forwards'>
          <div
            className={cn(
              'size-full bg-black-background',
              active ? 'animate-fade-in' : 'animate-fade-out',
            )}
            onClick={onClose}
          />
          <div
            className={cn(
              'absolute left-1/2 top-1/2 w-[calc(100%-48px)] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-black-secondary px-4 pb-8 pt-6',
              active ? 'animate-fade-in' : 'animate-fade-out',
              className,
            )}
          >
            <div className='flex flex-wrap items-center justify-between gap-2'>
              {title && (
                <span className='text-lg font-semibold text-white-primary'>
                  {title}
                </span>
              )}
              <button onClick={onClose}>
                <Image src={CloseButton} alt='닫기' width={24} height={24} />
              </button>
            </div>
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

export default Modal;
