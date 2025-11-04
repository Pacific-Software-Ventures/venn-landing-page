import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = true }: CardProps) {
  const hoverStyles = hover
    ? 'hover:shadow-medium hover:-translate-y-1'
    : '';

  return (
    <div
      className={`bg-white border border-border rounded-lg p-8 shadow-subtle transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
