import { NextResponse } from 'next/server';
import { getLeaderboard } from '@/lib/airtableServer';

// Cache for 30 seconds to reduce Airtable API calls
export const revalidate = 30;

export async function GET(request: Request) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const limitParam = searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam, 10) : undefined;

    const leaderboard = await getLeaderboard(limit);

    return NextResponse.json({
      success: true,
      leaderboard,
      total: leaderboard.length,
    });
  } catch (error: any) {
    console.error('Leaderboard error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}
