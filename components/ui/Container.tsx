import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export function Container({ children, size = 'xl', className = '' }: ContainerProps) {
  const sizes = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-5xl',
    xl: 'max-w-7xl',
  };

  return (
    <div className={`${sizes[size]} mx-auto px-4 sm:px-6 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
