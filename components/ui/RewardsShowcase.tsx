'use client';

import { useState } from 'react';
import { X, Trophy, Zap, Users, Gift, Star, Sparkles } from 'lucide-react';
import { REWARD_TIERS } from '@/lib/rewards';

interface RewardsShowcaseProps {
  isOpen: boolean;
  onClose: () => void;
  currentRank?: number;
}

export function RewardsShowcase({ isOpen, onClose, currentRank }: RewardsShowcaseProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-4 animate-fade-in overflow-y-auto">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl animate-scale-in my-8">
        {/* Animated gradient border */}
        <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-burnt-orange via-amber-500 to-burnt-orange bg-[length:200%_200%] animate-gradient-rotate -z-10" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-3 sm:p-2 rounded-full bg-white hover:bg-stone-100 transition-colors z-10 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-stone-700" />
        </button>

        {/* Content */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
          {/* Header - VIRAL MESSAGING */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-burnt-orange to-amber-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 animate-pulse">
              <Sparkles className="w-4 h-4" />
              LIMITED SPOTS AVAILABLE
              <Sparkles className="w-4 h-4" />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal mb-3 leading-tight">
              Win a <span className="text-transparent bg-clip-text bg-gradient-to-r from-burnt-orange to-amber-600">Yacht Party</span> 🛥️
            </h1>

            <p className="text-lg sm:text-xl text-stone-600 mb-2">
              Share your link. Climb the leaderboard. Win epic prizes.
            </p>

            <p className="text-sm text-stone-500">
              Over <strong className="text-burnt-orange">$10,000+</strong> in rewards up for grabs
            </p>
          </div>

          {/* Urgency Bar */}
          <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-8 flex items-center gap-3">
            <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-bold text-red-900">Only 5 people win the Yacht Party!</p>
              <p className="text-sm text-red-700">Start sharing now to secure your spot</p>
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="space-y-4">
            {REWARD_TIERS.map((tier, index) => {
              const isCurrentTier = currentRank && (
                tier.rank === currentRank ||
                (tier.rankRange && currentRank >= tier.rankRange[0] && currentRank <= tier.rankRange[1])
              );

              return (
                <div
                  key={tier.id}
                  className={`relative rounded-2xl p-6 transition-all duration-300 ${
                    isCurrentTier
                      ? 'ring-4 ring-burnt-orange shadow-2xl scale-105'
                      : 'hover:shadow-xl'
                  }`}
                  style={{
                    background: index === 0
                      ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                      : index === 1
                      ? 'linear-gradient(135deg, #E5E5E5 0%, #A0A0A0 100%)'
                      : index === 2
                      ? 'linear-gradient(135deg, #CD7F32 0%, #8B4513 100%)'
                      : 'linear-gradient(135deg, #FEF3C7 0%, #FED7AA 100%)'
                  }}
                >
                  {/* Current tier indicator */}
                  {isCurrentTier && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-burnt-orange text-white px-4 py-1 rounded-full text-xs font-bold animate-bounce">
                      ⭐ YOUR TIER
                    </div>
                  )}

                  {/* Limited spots badge for top tiers */}
                  {index < 3 && (
                    <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse shadow-lg">
                      {tier.rank ? '1 SPOT' : `${(tier.rankRange?.[1] || 0) - (tier.rankRange?.[0] || 0) + 1} SPOTS`}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-6">
                    {/* Left: Icon & Title */}
                    <div className="flex-shrink-0">
                      <div className={`text-6xl sm:text-7xl mb-3 ${index === 0 ? 'animate-bounce' : ''}`}>
                        {tier.icon}
                      </div>
                      <div>
                        <h3 className={`text-2xl sm:text-3xl font-black mb-1 ${
                          index < 3 ? 'text-white' : 'text-charcoal'
                        }`}>
                          {tier.name}
                        </h3>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                            index < 3 ? 'bg-white/20 text-white' : 'bg-burnt-orange/20 text-burnt-orange'
                          }`}>
                            {tier.badge}
                          </span>
                          {tier.value && (
                            <span className={`text-lg font-black ${
                              index < 3 ? 'text-white' : 'text-burnt-orange'
                            }`}>
                              {tier.value}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Right: Rewards */}
                    <div className="flex-1">
                      <p className={`text-sm mb-4 ${
                        index < 3 ? 'text-white/90' : 'text-stone-700'
                      }`}>
                        {tier.description}
                      </p>

                      <div className="space-y-2">
                        {tier.rewards.map((reward, i) => (
                          <div
                            key={i}
                            className={`flex items-start gap-3 p-3 rounded-lg ${
                              index < 3 ? 'bg-white/10 backdrop-blur-sm' : 'bg-white/50'
                            }`}
                          >
                            <Zap className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                              index < 3 ? 'text-white' : 'text-burnt-orange'
                            }`} />
                            <span className={`text-sm sm:text-base font-semibold ${
                              index < 3 ? 'text-white' : 'text-charcoal'
                            }`}>
                              {reward}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 bg-gradient-to-br from-burnt-orange to-amber-600 rounded-2xl p-6 text-white text-center">
            <Trophy className="w-12 h-12 mx-auto mb-3 animate-bounce" />
            <h3 className="text-2xl font-black mb-2">Ready to Win?</h3>
            <p className="text-white/90 mb-4">
              Share your referral link now and start climbing the leaderboard
            </p>
            <button
              onClick={onClose}
              className="bg-white text-burnt-orange font-bold px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Start Sharing Now 🚀
            </button>
          </div>

          {/* Social Proof */}
          <div className="mt-6 text-center">
            <p className="text-sm text-stone-500">
              <strong className="text-charcoal">3,000+</strong> people competing ·
              <strong className="text-burnt-orange"> Limited spots</strong> ·
              <strong className="text-charcoal"> Real prizes</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
