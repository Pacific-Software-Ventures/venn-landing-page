import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!);

// Cache for 10 seconds
export const revalidate = 10;

export async function POST(request: NextRequest) {
  try {
    const { recordId, referralCode } = await request.json();

    if (!recordId && !referralCode) {
      return NextResponse.json(
        { error: 'recordId or referralCode required' },
        { status: 400 }
      );
    }

    // Get all records sorted by points
    const allRecords = await base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!)
      .select({
        fields: ['ReferralCode', 'Points', 'ReferralCount'],
        sort: [{ field: 'Points', direction: 'desc' }],
      })
      .all();

    // Find user's position
    let userPosition = -1;
    for (let i = 0; i < allRecords.length; i++) {
      const record = allRecords[i];
      if (
        (recordId && record.id === recordId) ||
        (referralCode && record.fields.ReferralCode === referralCode)
      ) {
        userPosition = i + 1; // Position is 1-indexed
        break;
      }
    }

    if (userPosition === -1) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      position: userPosition,
      totalUsers: allRecords.length,
    });
  } catch (error: any) {
    console.error('Position lookup error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to get position' },
      { status: 500 }
    );
  }
}
