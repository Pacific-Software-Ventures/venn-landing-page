import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';
import { generateReferralCode } from '@/lib/referralCode';
import { validateEmailForReferral, cleanEmail, checkIPLimit, checkReferralLimit } from '@/lib/fraudCheck';
import { findUserByReferralCode, findUserByEmail, countSignupsByIP, updateUserPoints } from '@/lib/airtableServer';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, age, gender, contact, referredBy } = body;

    // Validate the data
    if (!name || !age || !gender || !contact) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email
    const emailValidation = validateEmailForReferral(contact);
    if (!emailValidation.valid) {
      return NextResponse.json(
        { error: emailValidation.reason },
        { status: 400 }
      );
    }

    // Clean email to prevent +1 tricks
    const cleanedEmail = cleanEmail(contact);

    // Check if email already exists
    const existingUser = await findUserByEmail(cleanedEmail);
    if (existingUser) {
      // Return existing user's referral info instead of creating duplicate
      const referralLink = `${request.nextUrl.origin}?ref=${existingUser.ReferralCode}`;
      return NextResponse.json({
        success: true,
        duplicate: true,
        referralCode: existingUser.ReferralCode,
        referralLink: referralLink,
        points: existingUser.Points || 0,
        message: 'You are already on the waitlist! Here is your referral link.',
      });
    }

    // Get IP address for fraud prevention
    const ipAddress = request.headers.get('x-forwarded-for') ||
                     request.headers.get('x-real-ip') ||
                     'unknown';

    // Check IP rate limiting
    const ipCount = await countSignupsByIP(ipAddress);
    const ipCheck = checkIPLimit(ipCount);

    // Generate unique referral code for new user
    const newReferralCode = generateReferralCode();

    // Determine points to award
    let pointsForNewUser = 10; // Base signup points
    let pointsForReferrer = 0;
    let shouldAwardPoints = ipCheck.allowed; // Only award points if IP check passes
    let referrerRecord = null;

    // If they were referred, validate and process
    if (referredBy) {
      referrerRecord = await findUserByReferralCode(referredBy);

      if (referrerRecord && referrerRecord.id) {
        // Check if referrer has hit their limit
        const referralCount = referrerRecord.ReferralCount || 0;
        const referralCheck = checkReferralLimit(referralCount);

        if (referralCheck.allowed && shouldAwardPoints) {
          pointsForReferrer = 20; // Award 20 points to referrer
        }
      }
    }

    // Create record in Airtable
    const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!).create([
      {
        fields: {
          Name: name,
          Age: parseInt(age),
          Gender: gender,
          Contact: cleanedEmail,
          ReferralCode: newReferralCode,
          ReferredBy: referredBy || '',
          Points: shouldAwardPoints ? pointsForNewUser : 0,
          ReferralCount: 0,
          IPAddress: ipAddress,
        },
      },
    ]);

    const newUserId = records[0].id;

    // If referred and checks passed, award points to referrer
    if (referrerRecord && referrerRecord.id && pointsForReferrer > 0) {
      try {
        await updateUserPoints(referrerRecord.id, pointsForReferrer, true);
      } catch (error) {
        console.error('Error updating referrer points:', error);
        // Don't fail the whole request if this fails
      }
    }

    // Generate referral link
    const referralLink = `${request.nextUrl.origin}?ref=${newReferralCode}`;

    // Get user's leaderboard position
    let leaderboardPosition = null;
    let totalUsers = null;
    try {
      const allRecords = await base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!)
        .select({
          fields: ['Points'],
          sort: [{ field: 'Points', direction: 'desc' }],
        })
        .all();

      totalUsers = allRecords.length;

      // Find position (records are already sorted by points desc)
      for (let i = 0; i < allRecords.length; i++) {
        if (allRecords[i].id === newUserId) {
          leaderboardPosition = i + 1;
          break;
        }
      }
    } catch (error) {
      console.error('Error calculating position:', error);
      // Don't fail the whole request if position calc fails
    }

    return NextResponse.json({
      success: true,
      recordId: newUserId,
      referralCode: newReferralCode,
      referralLink: referralLink,
      points: shouldAwardPoints ? pointsForNewUser : 0,
      flagged: !shouldAwardPoints,
      leaderboardPosition,
      totalUsers,
    });
  } catch (error: any) {
    console.error('Airtable submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit to Airtable' },
      { status: 500 }
    );
  }
}
