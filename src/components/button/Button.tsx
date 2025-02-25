import type { PropsWithChildren } from 'react';

import { cn } from '@/lib/styleUtils';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  isRounded?: boolean;
  onClick: () => void;
}

const Button = ({
  className,
  children,
  isRounded,
  onClick,
  disabled,
  ...rest
}: IButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full bg-button-background px-4 py-2 text-sm font-bold',
        isRounded && 'rounded-full',
        disabled && 'bg-gray-medium',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
