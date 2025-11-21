'use client';

import { useState, useEffect } from 'react';
import { Trophy, Search, Loader2 } from 'lucide-react';
import { getRewardTier } from '@/lib/rewards';

interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  referralCount: number;
}

export function FullLeaderboard() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [filteredLeaderboard, setFilteredLeaderboard] = useState<LeaderboardEntry[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);

  // Fetch leaderboard data
  const fetchLeaderboard = async () => {
    setIsUpdating(true);
    try {
      const response = await fetch('/api/leaderboard');
      const data = await response.json();

      if (data.success) {
        setLeaderboard(data.leaderboard);
        setFilteredLeaderboard(data.leaderboard);
      }
    } catch (error) {
      console.error('Error fetching leaderboard:', error);
    } finally {
      setLoading(false);
      setTimeout(() => setIsUpdating(false), 500);
    }
  };

  // Initial load and auto-refresh every 30 seconds
  useEffect(() => {
    fetchLeaderboard();
    const interval = setInterval(fetchLeaderboard, 30000);
    return () => clearInterval(interval);
  }, []);

  // Filter leaderboard based on search term
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredLeaderboard(leaderboard);
    } else {
      const filtered = leaderboard.filter(entry =>
        entry.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredLeaderboard(filtered);
    }
  }, [searchTerm, leaderboard]);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Trophy className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <div className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center">
            <span className="text-xs font-bold text-stone-600">{rank}</span>
          </div>
        );
    }
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return 'from-yellow-400 via-yellow-500 to-yellow-600';
    if (rank === 2) return 'from-gray-300 via-gray-400 to-gray-500';
    if (rank === 3) return 'from-amber-500 via-amber-600 to-amber-700';
    if (rank <= 10) return 'from-orange-400 via-burnt-orange to-orange-600';
    if (rank <= 25) return 'from-orange-300 via-orange-400 to-orange-500';
    if (rank <= 100) return 'from-amber-300 via-amber-400 to-amber-500';
    return 'from-stone-200 via-stone-300 to-stone-400';
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 text-burnt-orange animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full flex-1 flex flex-col min-h-0">
      {/* Search Bar */}
      <div className="mb-6 flex-shrink-0">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
          <input
            type="search"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 text-base rounded-xl border-2 border-stone-200
                     focus:border-burnt-orange focus:outline-none transition-colors
                     bg-white shadow-sm"
            style={{ fontSize: '16px' }} // Prevent zoom on iOS
          />
        </div>
        {searchTerm && (
          <p className="mt-2 text-sm text-stone-600">
            Found {filteredLeaderboard.length} result{filteredLeaderboard.length !== 1 ? 's' : ''}
          </p>
        )}
      </div>

      {/* Leaderboard Table - Desktop */}
      <div className="hidden md:flex flex-col bg-white rounded-2xl shadow-lg border border-stone-200 overflow-hidden flex-1 min-h-0">
        <div className="overflow-y-auto" style={{ flex: 1 }}>
          <table className="w-full">
            <thead className="bg-gradient-to-r from-burnt-orange to-amber-600 text-white sticky top-0 z-10">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Rank</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Points</th>
                <th className="px-6 py-4 text-left text-sm font-bold uppercase tracking-wider">Reward Tier</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {filteredLeaderboard.map((entry, index) => {
                const rewardTier = getRewardTier(entry.rank, entry.referralCount);
                const isTop3 = entry.rank <= 3;
                const isTop100 = entry.rank <= 100;

                return (
                  <tr
                    key={`${entry.rank}-${entry.name}`}
                    className={`
                      transition-colors hover:bg-stone-50
                      ${isTop3 ? 'bg-gradient-to-r from-amber-50/50 to-orange-50/50' : ''}
                      ${isUpdating && index < 10 ? 'animate-pulse-glow' : ''}
                    `}
                  >
                    {/* Rank */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {getRankIcon(entry.rank)}
                        <span className={`font-bold ${isTop3 ? 'text-burnt-orange text-lg' : 'text-charcoal'}`}>
                          #{entry.rank}
                        </span>
                      </div>
                    </td>

                    {/* Name */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`font-semibold ${isTop3 ? 'text-charcoal text-base' : 'text-stone-700'}`}>
                        {entry.name}
                      </span>
                    </td>

                    {/* Points */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${getRankColor(entry.rank)}`}>
                        <span className="text-sm font-bold text-white">
                          {entry.points.toLocaleString()}
                        </span>
                      </div>
                    </td>

                    {/* Reward Tier */}
                    <td className="px-6 py-4 whitespace-nowrap">
                      {rewardTier ? (
                        <div className="flex items-center gap-2">
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${rewardTier.gradient} shadow-sm`}>
                            <span className="text-xs font-bold text-white">
                              {rewardTier.badge}
                            </span>
                          </div>
                          {rewardTier.value && (
                            <span className="text-xs font-semibold text-burnt-orange">
                              {rewardTier.value}
                            </span>
                          )}
                        </div>
                      ) : (
                        <span className="text-stone-400 text-sm">-</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredLeaderboard.length === 0 && (
          <div className="py-12 text-center">
            <p className="text-stone-500">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>

      {/* Leaderboard Cards - Mobile */}
      <div className="md:hidden space-y-3 flex-1 overflow-y-auto pb-4">
        {filteredLeaderboard.map((entry) => {
          const rewardTier = getRewardTier(entry.rank, entry.referralCount);
          const isTop3 = entry.rank <= 3;

          return (
            <div
              key={`${entry.rank}-${entry.name}`}
              className={`
                bg-white rounded-xl p-4 shadow-md border-2
                ${isTop3
                  ? 'border-burnt-orange bg-gradient-to-br from-amber-50/50 to-orange-50/50'
                  : 'border-stone-200'
                }
              `}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  {getRankIcon(entry.rank)}
                  <div>
                    <p className={`font-bold ${isTop3 ? 'text-burnt-orange' : 'text-charcoal'}`}>
                      #{entry.rank}
                    </p>
                    <p className="text-sm font-semibold text-stone-700">{entry.name}</p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${getRankColor(entry.rank)}`}>
                  <span className="text-sm font-bold text-white">
                    {entry.points}
                  </span>
                </div>
              </div>

              {rewardTier && (
                <div className="flex justify-center mt-2">
                  <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${rewardTier.gradient}`}>
                    <span className="text-xs font-bold text-white">
                      {rewardTier.badge}
                    </span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        {filteredLeaderboard.length === 0 && (
          <div className="py-12 text-center bg-white rounded-xl">
            <p className="text-stone-500">No results found for "{searchTerm}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
