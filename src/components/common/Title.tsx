import { cn } from '@/lib/utils';

interface ITitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = '' }: ITitleProps) => {
  return (
    <h2
      className={cn(
        'text-base font-bold text-gray-light sm:text-xl sm:leading-[1.3] lg:text-2xl',
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default Title;
