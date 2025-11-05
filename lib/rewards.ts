// Venn Waitlist Rewards System
// Real incentives to drive viral growth

export interface RewardTier {
  id: string;
  name: string;
  rank?: number; // Specific rank requirement (e.g., #1)
  rankRange?: [number, number]; // Range (e.g., [2, 5] for #2-#5)
  referralCount?: number; // Alternative: referral milestone
  icon: string;
  color: string;
  gradient: string;
  rewards: string[];
  description: string;
  badge: string;
  value?: string; // Estimated value
}

export const REWARD_TIERS: RewardTier[] = [
  {
    id: 'champion',
    name: 'CHAMPION',
    rank: 1,
    icon: 'trophy',
    color: '#FFD700',
    gradient: 'from-yellow-400 via-yellow-500 to-yellow-600',
    badge: 'RANK #1',
    value: '$2,000+',
    rewards: [
      '4 Free VIP Yacht Party Tickets OR $250 Cash',
      'Founders Dinner with Zed + Team (Michelin or House of Prime Rib up to $150)',
      'Lifetime Early Access (first dibs on drops + flagship events)',
      '"Hall of Fame" Founder Badge inside app forever'
    ],
    description: 'THE BIG ONE! Choose your grand prize + exclusive founder perks!'
  },
  {
    id: 'top10',
    name: 'RANK 2-10',
    rankRange: [2, 10],
    icon: 'ticket',
    color: '#CD7F32',
    gradient: 'from-amber-500 via-orange-500 to-amber-600',
    badge: 'RANK 2-10',
    value: '$500+',
    rewards: [
      '1 Free Ticket to Next Flagship Venn Event',
      '$100 Delta Airlines Credit',
      'Early Access 48 hrs before public',
      '"Early Architect" Badge'
    ],
    description: 'Elite perks! Free flagship event ticket + flight credit!'
  },
  {
    id: 'top25',
    name: 'RANK 11-25',
    rankRange: [11, 25],
    icon: 'gift',
    color: '#EA580C',
    gradient: 'from-orange-500 via-burnt-orange to-orange-600',
    badge: 'RANK 11-25',
    value: '$300+',
    rewards: [
      'Free House of Prime Rib Dinner up to $150 (dine with a friend)',
      '50% off any Venn ticket for your first 3 events',
      'Early Access 24 hrs before public',
      '"First Cohort" Badge'
    ],
    description: 'Unlock insider perks! Fine dining + exclusive discounts!'
  },
  {
    id: 'top100',
    name: 'RANK 26-100',
    rankRange: [26, 100],
    icon: 'zap',
    color: '#F59E0B',
    gradient: 'from-amber-400 via-yellow-500 to-amber-500',
    badge: 'RANK 26-100',
    value: '$100+',
    rewards: [
      'Free 7-Day Venn+ Trial Access Code',
      'Skip-the-line matching when app launches',
      'Surprise Venn physical collectible (limited edition)'
    ],
    description: 'Early supporter perks! Premium trial + exclusive collectible!'
  }
];

// Get reward tier for a user based on rank or referral count
export function getRewardTier(rank?: number, referralCount?: number): RewardTier | null {
  // Check rank-based rewards first (highest priority)
  if (rank) {
    // Specific rank
    const specificRank = REWARD_TIERS.find(tier => tier.rank === rank);
    if (specificRank) return specificRank;

    // Rank range
    const rangeRank = REWARD_TIERS.find(
      tier => tier.rankRange && rank >= tier.rankRange[0] && rank <= tier.rankRange[1]
    );
    if (rangeRank) return rangeRank;
  }

  // Check referral-based rewards
  if (referralCount !== undefined) {
    // Find highest tier user qualifies for
    const qualifiedTiers = REWARD_TIERS.filter(
      tier => tier.referralCount && referralCount >= tier.referralCount
    ).sort((a, b) => (b.referralCount || 0) - (a.referralCount || 0));

    if (qualifiedTiers.length > 0) return qualifiedTiers[0];
  }

  return null;
}

// Get next reward tier and progress
export function getNextReward(currentRank?: number, referralCount?: number): {
  nextTier: RewardTier | null;
  progress: number;
  needed: number;
  type: 'rank' | 'referrals';
} | null {
  // Prioritize rank-based rewards
  if (currentRank) {
    // Find next rank tier
    const nextRankTier = REWARD_TIERS.find(tier => {
      if (tier.rank && currentRank > tier.rank) return true;
      if (tier.rankRange && currentRank > tier.rankRange[1]) return true;
      return false;
    });

    if (nextRankTier) {
      const targetRank = nextRankTier.rank || nextRankTier.rankRange?.[1] || 0;
      const ranksToGo = currentRank - targetRank;
      return {
        nextTier: nextRankTier,
        progress: Math.max(0, 100 - (ranksToGo * 10)), // Rough estimate
        needed: ranksToGo,
        type: 'rank'
      };
    }
  }

  // Check referral milestones
  if (referralCount !== undefined) {
    const nextReferralTier = REWARD_TIERS.filter(
      tier => tier.referralCount && tier.referralCount > referralCount
    ).sort((a, b) => (a.referralCount || 0) - (b.referralCount || 0))[0];

    if (nextReferralTier && nextReferralTier.referralCount) {
      const needed = nextReferralTier.referralCount - referralCount;
      const progress = (referralCount / nextReferralTier.referralCount) * 100;
      return {
        nextTier: nextReferralTier,
        progress: Math.min(progress, 100),
        needed,
        type: 'referrals'
      };
    }
  }

  return null;
}

// Get all active rewards for display
export function getActiveRewards(): RewardTier[] {
  return REWARD_TIERS;
}
