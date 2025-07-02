import type { PropsWithChildren } from 'react';

import { LoaderCircle } from 'lucide-react';

import { cn } from '@/lib/utils';

interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  isRounded?: boolean;
  onClick?: () => void;
  loading?: boolean;
}

const Button = ({
  className,
  children,
  isRounded,
  onClick,
  disabled,
  loading,
  ...rest
}: IButtonProps) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        'w-full bg-button-background px-4 py-2 text-sm font-bold',
        isRounded && 'rounded-full',
        disabled && 'bg-gray-medium',
        className,
      )}
      {...rest}
    >
      {loading ? (
        <div className='flex items-center justify-center'>
          <LoaderCircle color='white' className='animate-spin' />
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
