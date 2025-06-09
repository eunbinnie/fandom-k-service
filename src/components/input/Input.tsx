import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

const Input = ({ error, errorMessage, ...rest }: InputProps) => {
  return (
    <div>
      <div
        className={cn(
          'w-full rounded-lg border p-4 text-xl font-bold leading-[1.3]',
          'placeholder:text-gray-dark',
          error ? 'border-brand-red' : 'border-white-pure',
        )}
      >
        <input
          className='w-[inherit] border-none bg-transparent outline-none'
          {...rest}
        />
      </div>
      {error && errorMessage && (
        <p className='mt-[6px] text-2xs font-medium text-brand-red'>
          {errorMessage}
        </p>
      )}
    </div>
  );
};

export default Input;
