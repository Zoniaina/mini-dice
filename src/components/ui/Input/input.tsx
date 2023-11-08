import { cn } from '../../../utils/tailwind-merge';

type InputProps = React.ComponentProps<'input'>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      {...props}
      className={cn('border border-slate-300 text-xs py-2 px-5', className)}
    />
  );
};

export default Input;
