'use client';

import { useState, useEffect } from 'react';
import { X, Copy, Check, Gift, Users } from 'lucide-react';

interface ReferralSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  referralLink: string;
  points: number;
  leaderboardPosition?: number;
  totalUsers?: number;
}

export function ReferralSuccessModal({
  isOpen,
  onClose,
  referralLink,
  points,
  leaderboardPosition,
  totalUsers,
}: ReferralSuccessModalProps) {
  const [copied, setCopied] = useState(false);
  const [position, setPosition] = useState<number | null>(leaderboardPosition || null);
  const [total, setTotal] = useState<number | null>(totalUsers || null);

  useEffect(() => {
    // Fetch leaderboard position if not provided
    if (isOpen && !position) {
      fetchLeaderboardPosition();
    }
  }, [isOpen]);

  const fetchLeaderboardPosition = async () => {
    try {
      const response = await fetch('/api/leaderboard/position');
      const data = await response.json();
      if (data.success) {
        setPosition(data.position);
        setTotal(data.totalUsers);
      }
    } catch (error) {
      console.error('Failed to fetch position:', error);
    }
  };

  if (!isOpen) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralLink);
      setCopied(true);

      // Haptic feedback on mobile
      if (navigator.vibrate) {
        navigator.vibrate(50);
      }

      setTimeout(() => setCopied(false), 3000);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Join me on Venn!',
          text: `I just joined Venn's waitlist - it's going to help us stop endless scrolling and start living! Skip the line with my link:`,
          url: referralLink,
        });

        // Haptic feedback
        if (navigator.vibrate) {
          navigator.vibrate(50);
        }
      } catch (error) {
        // User cancelled or share failed
        console.log('Share cancelled or failed:', error);
      }
    }
  };

  const getPositionSuffix = (pos: number) => {
    if (pos % 10 === 1 && pos !== 11) return 'st';
    if (pos % 10 === 2 && pos !== 12) return 'nd';
    if (pos % 10 === 3 && pos !== 13) return 'rd';
    return 'th';
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      />

      {/* Modal - Mobile optimized with max height and scroll */}
      <div className="relative w-full max-w-md max-h-[90vh] bg-white rounded-2xl shadow-2xl animate-scale-in overflow-hidden z-10">
        {/* Animated gradient border effect */}
        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-burnt-orange via-amber-500 to-burnt-orange bg-[length:200%_200%] animate-gradient-rotate pointer-events-none" style={{ zIndex: -1 }} />

        {/* Close Button - Larger touch target on mobile */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-3 sm:p-2 rounded-full hover:bg-stone-100 transition-colors z-20 min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-stone-500" />
        </button>

        {/* Content - Scrollable with safe area support */}
        <div className="p-6 sm:p-8 bg-white rounded-2xl max-h-[90vh] overflow-y-auto pb-[calc(1.5rem+env(safe-area-inset-bottom))] sm:pb-8">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-burnt-orange to-amber-600 flex items-center justify-center animate-scale-in animation-delay-200 shadow-lg shadow-burnt-orange/30">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-charcoal mb-3">
            You're on the list!
          </h2>

          {/* Points Earned */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-5 h-5 text-burnt-orange" />
            <p className="text-base font-semibold text-burnt-orange">
              You earned {points} points!
            </p>
          </div>

          {/* Referral Link Section */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-stone-600 mb-2">
              Your unique referral link:
            </label>
            <div className="relative">
              <input
                type="text"
                value={referralLink}
                readOnly
                onClick={(e) => e.currentTarget.select()}
                className="w-full px-4 py-3 pr-14 bg-stone-50 border-2 border-stone-200 rounded-lg text-sm font-mono text-stone-700 focus:outline-none focus:border-burnt-orange transition-colors"
              />
              <button
                onClick={handleCopy}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all duration-300 cursor-pointer ${
                  copied
                    ? 'bg-green-500 text-white'
                    : 'bg-burnt-orange text-white hover:bg-amber-600'
                }`}
                aria-label="Copy referral link"
              >
                {copied ? (
                  <Check className="w-4 h-4" strokeWidth={3} />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            {copied && (
              <p className="mt-2 text-sm text-green-600 font-medium animate-fade-in flex items-center gap-1">
                <Check className="w-4 h-4" strokeWidth={3} />
                Copied!
              </p>
            )}
          </div>

          {/* Subtle Incentive */}
          <div className="bg-stone-50 rounded-xl p-4 mb-6 border border-stone-200">
            <p className="text-sm text-stone-600 text-center leading-relaxed">
              Share your link to climb the leaderboard and win prizes worth <strong className="text-charcoal">$10,000+</strong>
            </p>
          </div>

          {/* Social Proof */}
          <div className="text-center mb-6">
            <p className="text-sm text-stone-500">
              Join <strong className="text-charcoal">3,000+</strong> people already on the waitlist
            </p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            {/* Native Share Button (Mobile Only) */}
            {typeof navigator !== 'undefined' && navigator.share && (
              <button
                onClick={handleNativeShare}
                className="w-full py-3 px-6 bg-burnt-orange text-white font-semibold rounded-xl hover:bg-amber-600 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Users className="w-5 h-5" />
                Share with Friends
              </button>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-3 px-6 bg-stone-100 text-charcoal font-medium rounded-xl hover:bg-stone-200 transition-all duration-300 cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
