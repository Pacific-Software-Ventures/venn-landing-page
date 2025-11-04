import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-lg sm:rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 touch-manipulation';

  const variants = {
    primary: 'bg-burnt-orange hover:bg-burnt-orange-dark text-white shadow-[0_4px_14px_rgba(234,88,12,0.4)] hover:shadow-[0_6px_20px_rgba(234,88,12,0.5)] active:shadow-md',
    secondary: 'border-2 border-burnt-orange/30 bg-white/80 text-burnt-orange hover:bg-burnt-orange hover:border-burnt-orange hover:text-white shadow-sm hover:shadow-md transition-all duration-200',
    ghost: 'bg-burnt-orange/10 text-burnt-orange-dark hover:bg-burnt-orange/20 hover:shadow-sm',
  };

  const sizes = {
    sm: 'px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm',
    md: 'px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base',
    lg: 'px-6 py-3 sm:px-8 sm:py-3.5 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
