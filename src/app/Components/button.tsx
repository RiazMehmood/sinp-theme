import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: ReactNode;
  className?: string;
}
const Button = ({ onClick, children, className }: ButtonProps) => {
    const defaultClassName =
    'flex flex-wrap items-center transition-all hover:bg-orange hover:text-white px-3 md:px-4 xl:px-10 py-3 md:py-4 xl:py-5 rounded-full text-orange capitalize font-medium text-sm lg:text-md leading-normal';
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <div>
      <button
        onClick={onClick}
        className={combinedClassName}
      >
        {children}
        
      </button>
    </div>
  );
};

export default Button;
