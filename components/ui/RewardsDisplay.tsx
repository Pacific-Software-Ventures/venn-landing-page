'use client';

import { Trophy, Gift, Zap, ChevronRight, Star } from 'lucide-react';
import { getRewardTier, getNextReward, getActiveRewards, type RewardTier } from '@/lib/rewards';

interface RewardsDisplayProps {
  rank?: number;
  referralCount?: number;
  compact?: boolean;
}

export function RewardsDisplay({ rank, referralCount = 0, compact = false }: RewardsDisplayProps) {
  const currentTier = getRewardTier(rank, referralCount);
  const nextReward = getNextReward(rank, referralCount);
  const allRewards = getActiveRewards();

  if (compact && currentTier) {
    // Compact view for modal/sidebar
    return (
      <div className={`rounded-xl p-4 bg-gradient-to-br ${currentTier.gradient} text-white`}>
        <div className="flex items-center gap-3">
          <div className="text-3xl">{currentTier.icon}</div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h4 className="font-bold text-lg">{currentTier.name}</h4>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                {currentTier.badge}
              </span>
            </div>
            <p className="text-sm opacity-90 mt-0.5">{currentTier.description}</p>
            {currentTier.value && (
              <p className="text-xs opacity-75 mt-1">Value: {currentTier.value}</p>
            )}
          </div>
        </div>

        {/* Rewards List */}
        <div className="mt-3 space-y-1">
          {currentTier.rewards.slice(0, 3).map((reward, i) => (
            <div key={i} className="flex items-center gap-2 text-sm">
              <Zap className="w-3 h-3 flex-shrink-0" />
              <span className="opacity-90">{reward}</span>
            </div>
          ))}
          {currentTier.rewards.length > 3 && (
            <p className="text-xs opacity-75 ml-5">
              +{currentTier.rewards.length - 3} more rewards
            </p>
          )}
        </div>
      </div>
    );
  }

  // Full view - show all tiers
  return (
    <div className="space-y-4">
      {/* Current Tier (if exists) */}
      {currentTier && (
        <div className={`rounded-2xl p-6 bg-gradient-to-br ${currentTier.gradient} text-white shadow-lg`}>
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="text-5xl">{currentTier.icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-2xl font-bold">{currentTier.name}</h3>
                  <span className="text-sm bg-white/30 px-3 py-1 rounded-full font-semibold">
                    {currentTier.badge}
                  </span>
                </div>
                <p className="opacity-90 mb-2">{currentTier.description}</p>
                {currentTier.value && (
                  <p className="text-sm opacity-80 font-semibold">
                    Estimated Value: {currentTier.value}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Rewards Grid */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentTier.rewards.map((reward, i) => (
              <div
                key={i}
                className="flex items-start gap-2 bg-white/10 rounded-lg p-2 text-sm backdrop-blur-sm"
              >
                <Zap className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{reward}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next Reward Progress */}
      {nextReward && nextReward.nextTier && (
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border-2 border-burnt-orange/20">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-burnt-orange" />
              <h4 className="font-bold text-charcoal">Next Reward</h4>
            </div>
            <span className="text-xs font-semibold text-burnt-orange">
              {nextReward.type === 'rank'
                ? `Move up ${nextReward.needed} spots`
                : `${nextReward.needed} more referrals`}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 bg-stone-200 rounded-full overflow-hidden mb-3">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-burnt-orange to-amber-500 rounded-full transition-all duration-500"
              style={{ width: `${nextReward.progress}%` }}
            />
          </div>

          {/* Next Tier Preview */}
          <div className="flex items-center gap-3">
            <div className="text-2xl">{nextReward.nextTier.icon}</div>
            <div className="flex-1">
              <p className="font-semibold text-sm text-charcoal">
                {nextReward.nextTier.name}
              </p>
              <p className="text-xs text-stone-600">
                {nextReward.nextTier.rewards[0]}
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-stone-400" />
          </div>
        </div>
      )}

      {/* All Tiers Overview */}
      {!currentTier && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-5 h-5 text-burnt-orange" />
            <h3 className="font-bold text-lg text-charcoal">Available Rewards</h3>
          </div>

          {allRewards.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-xl p-4 border-2 transition-all duration-300 hover:shadow-md ${
                tier.rank === 1 || (tier.rankRange && tier.rankRange[0] <= 5)
                  ? 'bg-gradient-to-br from-amber-50 to-orange-50 border-burnt-orange/30'
                  : 'bg-stone-50 border-stone-200'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className="text-3xl">{tier.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-bold text-charcoal">{tier.name}</h4>
                    <span className="text-xs bg-stone-200 text-stone-700 px-2 py-0.5 rounded-full font-semibold">
                      {tier.badge}
                    </span>
                    {tier.value && (
                      <span className="text-xs text-burnt-orange font-semibold ml-auto">
                        {tier.value}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-stone-600 mb-2">{tier.description}</p>

                  {/* Top rewards */}
                  <div className="space-y-1">
                    {tier.rewards.slice(0, 2).map((reward, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-700">
                        <Gift className="w-3 h-3 text-burnt-orange flex-shrink-0" />
                        <span>{reward}</span>
                      </div>
                    ))}
                    {tier.rewards.length > 2 && (
                      <p className="text-xs text-stone-500 ml-5">
                        +{tier.rewards.length - 2} more
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
