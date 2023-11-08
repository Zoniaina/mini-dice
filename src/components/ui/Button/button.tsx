import { cn } from '../../../utils/tailwind-merge';

type ButtonProps = React.ComponentProps<'button'>;

const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'bg-black text-white shadow-md text-[0.75em] px-4 py-2 rounded-sm cursor-pointer disabled:opacity-20',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
