import { NextResponse } from 'next/server';
import { getLeaderboard } from '@/lib/airtableServer';

// Cache for 30 seconds to reduce Airtable API calls
export const revalidate = 30;

export async function GET() {
  try {
    const leaderboard = await getLeaderboard();

    return NextResponse.json({
      success: true,
      leaderboard,
    });
  } catch (error: any) {
    console.error('Leaderboard error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}
