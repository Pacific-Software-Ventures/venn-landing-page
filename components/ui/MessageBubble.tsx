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

  return (
    <div
      className={`absolute ${positionClasses[position]} z-[2] opacity-0`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards',
        '--rotation': `${Math.random() * 3 - 1.5}deg`,
        animation: `fade-in 1.2s ease-out ${delay}ms forwards, bubble-drift 20s ease-in-out infinite ${delay + 1000}ms`
      } as React.CSSProperties}
    >
      {/* Orange message bubble with tail */}
      <div className="relative max-w-[160px] sm:max-w-[200px] md:max-w-[240px] opacity-55">
        {/* Message bubble container */}
        <div className="relative">
          {/* Main bubble */}
          <div className="relative bg-gradient-to-br from-[#EA580C] to-[#C2410C] backdrop-blur-sm rounded-[18px] px-3 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_2px_6px_rgba(234,88,12,0.25)]">
            {/* Subtle inner highlight */}
            <div className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />

            <p className="relative text-white text-[0.6875rem] sm:text-[0.75rem] md:text-[0.8125rem] leading-[1.3] font-normal drop-shadow-[0_1px_2px_rgba(0,0,0,0.2)]">
              {message}
            </p>
          </div>

          {/* iMessage tail (bottom-left) - improved shape */}
          <svg
            className="absolute -bottom-[1px] left-[2px] text-[#C2410C]"
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
          >
            <path
              d="M 0 0 C 0 2, 0 5, 2 7 C 4 9, 8 10, 12 10 L 20 10 L 20 0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
