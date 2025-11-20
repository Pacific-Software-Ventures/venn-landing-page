'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, AlertCircle, CheckCircle, Info } from 'lucide-react';

export type BannerType = 'countdown' | 'success' | 'error' | 'info' | 'warning';

interface BannerProps {
  type?: BannerType;
  message?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
  countdownDate?: Date;
}

export function Banner({
  type = 'countdown',
  message,
  dismissible = true,
  onDismiss,
  countdownDate = new Date('2026-01-20T23:59:59'),
}: BannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Calculate countdown
  useEffect(() => {
    if (type !== 'countdown') return;

    // Use the timestamp to avoid Date object reference issues
    const targetTime = countdownDate.getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [type, countdownDate.getTime()]);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  // Style configuration based on type
  const config = {
    countdown: {
      bg: 'bg-gradient-to-r from-burnt-orange to-amber-600',
      text: 'text-white',
      icon: Calendar,
    },
    success: {
      bg: 'bg-gradient-to-r from-green-600 to-emerald-600',
      text: 'text-white',
      icon: CheckCircle,
    },
    error: {
      bg: 'bg-gradient-to-r from-red-600 to-rose-600',
      text: 'text-white',
      icon: AlertCircle,
    },
    warning: {
      bg: 'bg-gradient-to-r from-amber-500 to-orange-500',
      text: 'text-white',
      icon: AlertCircle,
    },
    info: {
      bg: 'bg-gradient-to-r from-blue-600 to-indigo-600',
      text: 'text-white',
      icon: Info,
    },
  };

  const { bg, text, icon: Icon } = config[type];

  // Countdown-specific rendering
  if (type === 'countdown') {
    return (
      <div className={`${bg} ${text} py-2 px-4 sm:px-6 shadow-warm relative z-50 animate-fade-in`}>
        <div className="w-full flex items-center justify-center gap-4 relative">
          {/* Center - Countdown */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop View */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
                <span className="text-xl font-black font-mono leading-none">{timeLeft.days}</span>
                <span className="text-[9px] font-bold opacity-80 ml-0.5">d</span>
              </div>
              <span className="text-lg font-black opacity-60">:</span>
              <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
                <span className="text-xl font-black font-mono leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[9px] font-bold opacity-80 ml-0.5">h</span>
              </div>
              <span className="text-lg font-black opacity-60">:</span>
              <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
                <span className="text-xl font-black font-mono leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[9px] font-bold opacity-80 ml-0.5">m</span>
              </div>
              <span className="text-lg font-black opacity-60">:</span>
              <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-1">
                <span className="text-xl font-black font-mono leading-none">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="text-[9px] font-bold opacity-80 ml-0.5">s</span>
              </div>
            </div>

            {/* Mobile View */}
            <div className="flex sm:hidden items-center gap-1.5">
              <div className="flex items-center gap-0.5 bg-white/10 rounded px-1.5 py-1">
                <span className="text-base font-black font-mono leading-none">{timeLeft.days}</span>
                <span className="text-[8px] font-bold opacity-80">d</span>
              </div>
              <span className="text-sm font-black opacity-60">:</span>
              <div className="flex items-center gap-0.5 bg-white/10 rounded px-1.5 py-1">
                <span className="text-base font-black font-mono leading-none">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-[8px] font-bold opacity-80">h</span>
              </div>
              <span className="text-sm font-black opacity-60">:</span>
              <div className="flex items-center gap-0.5 bg-white/10 rounded px-1.5 py-1">
                <span className="text-base font-black font-mono leading-none">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-[8px] font-bold opacity-80">m</span>
              </div>
            </div>
          </div>

          {/* Right side - Dismiss button (absolute positioned) */}
          {dismissible && (
            <button
              onClick={handleDismiss}
              className="absolute right-0 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Dismiss banner"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }

  // Generic banner rendering (for success, error, info, warning)
  return (
    <div className={`${bg} ${text} py-3 px-4 sm:px-6 shadow-lg relative z-50 animate-fade-in`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-1">
          <Icon className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm sm:text-base font-semibold">{message}</p>
        </div>

        {dismissible && (
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
