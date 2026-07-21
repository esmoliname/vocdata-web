import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          {
            'bg-brand-secondary text-white hover:bg-brand-secondary/90': variant === 'primary',
            'bg-brand-primary text-white hover:bg-brand-primary/90': variant === 'secondary',
            'border-2 border-white text-white hover:bg-white/10': variant === 'outline',
            'h-9 px-4 text-sm': size === 'sm',
            'h-12 px-6 text-base rounded-md': size === 'md', // 16px 40px but handled by padding classes roughly, or explicit
            'h-14 px-10 text-lg rounded-md': size === 'lg',
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
