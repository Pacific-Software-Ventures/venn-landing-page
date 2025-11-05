'use client';

import { useMemo } from 'react';

interface MessageBubbleProps {
  message: string;
  delay?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-left' | 'center-right' | 'top-center' | 'bottom-center' | 'mid-left' | 'mid-right';
}

export function MessageBubble({ message, delay = 0, position = 'top-left' }: MessageBubbleProps) {
  const positionClasses = {
    'top-left': 'top-[18%] left-[12%]',
    'top-center': 'top-[15%] left-[50%] -translate-x-1/2',
    'top-right': 'top-[20%] right-[15%]',
    'mid-left': 'top-[38%] left-[8%]',
    'mid-right': 'top-[42%] right-[10%]',
    'center-left': 'top-[52%] left-[15%]',
    'center-right': 'top-[55%] right-[12%]',
    'bottom-left': 'bottom-[22%] left-[10%]',
    'bottom-center': 'bottom-[18%] left-[50%] -translate-x-1/2',
    'bottom-right': 'bottom-[25%] right-[14%]',
  };

  // Generate stable rotation based on position and message to avoid hydration mismatch
  const rotation = useMemo(() => {
    const hash = (position + message).split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return ((hash % 300) / 100 - 1.5);
  }, [position, message]);

  return (
    <div
      className={`absolute ${positionClasses[position]} z-[2] opacity-0`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        '--rotation': `${rotation}deg`,
        animation: `fade-in 1.2s ease-out ${delay}ms forwards, bubble-drift 20s ease-in-out infinite ${delay + 1000}ms`
      } as React.CSSProperties}
    >
      {/* Authentic iMessage-style bubble */}
      <div className="relative max-w-[180px] sm:max-w-[220px] md:max-w-[260px] opacity-55">
        {/* Message bubble container with tail */}
        <div className="relative bubble-wrapper">
          {/* Main bubble */}
          <div className="relative bg-[#EA580C] rounded-[20px] px-3.5 py-2 sm:px-4 sm:py-2.5 shadow-[0_1px_2px_rgba(0,0,0,0.15),0_2px_6px_rgba(234,88,12,0.2)]">
            {/* Subtle inner highlight for dimension */}
            <div className="absolute inset-0 rounded-[20px] bg-gradient-to-b from-white/8 via-transparent to-black/5 pointer-events-none" />

            <p className="relative text-white text-[0.8125rem] sm:text-[0.875rem] md:text-[0.9375rem] leading-[1.35] font-normal tracking-[0.01em]">
              {message}
            </p>
          </div>

          {/* iMessage tail using pseudo-elements technique */}
          <style jsx>{`
            .bubble-wrapper::before {
              content: '';
              position: absolute;
              bottom: 0;
              left: -7px;
              width: 20px;
              height: 25px;
              background: #EA580C;
              border-bottom-right-radius: 16px 14px;
              z-index: 1;
            }

            .bubble-wrapper::after {
              content: '';
              position: absolute;
              bottom: 0;
              left: -26px;
              width: 26px;
              height: 25px;
              background: rgba(255, 251, 235, 0.98); /* Match page background */
              border-bottom-right-radius: 10px;
              z-index: 2;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
