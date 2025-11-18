import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!);

const table = base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!);

export interface WaitlistRecord {
  id?: string;
  Name: string;
  Age: number;
  Gender: string;
  Contact: string;
  Phone?: string;
  ReferralCode?: string;
  ReferredBy?: string;
  Points?: number;
  ReferralCount?: number;
  IPAddress?: string;
  CreatedAt?: string;
}

/**
 * Find a user by their referral code
 */
export async function findUserByReferralCode(code: string): Promise<WaitlistRecord | null> {
  try {
    const records = await table
      .select({
        filterByFormula: `{ReferralCode} = '${code}'`,
        maxRecords: 1,
      })
      .firstPage();

    if (records.length === 0) return null;

    const record = records[0];
    return {
      id: record.id,
      Name: record.get('Name') as string,
      Age: record.get('Age') as number,
      Gender: record.get('Gender') as string,
      Contact: record.get('Contact') as string,
      Phone: record.get('Phone') as string | undefined,
      ReferralCode: record.get('ReferralCode') as string | undefined,
      ReferredBy: record.get('ReferredBy') as string | undefined,
      Points: record.get('Points') as number | undefined,
      ReferralCount: record.get('ReferralCount') as number | undefined,
      IPAddress: record.get('IPAddress') as string | undefined,
      CreatedAt: record.get('CreatedAt') as string | undefined,
    };
  } catch (error) {
    console.error('Error finding user by referral code:', error);
    return null;
  }
}

/**
 * Find a user by their email
 */
export async function findUserByEmail(email: string): Promise<WaitlistRecord | null> {
  try {
    const records = await table
      .select({
        filterByFormula: `{Contact} = '${email}'`,
        maxRecords: 1,
      })
      .firstPage();

    if (records.length === 0) return null;

    const record = records[0];
    return {
      id: record.id,
      Name: record.get('Name') as string,
      Age: record.get('Age') as number,
      Gender: record.get('Gender') as string,
      Contact: record.get('Contact') as string,
      Phone: record.get('Phone') as string | undefined,
      ReferralCode: record.get('ReferralCode') as string | undefined,
      ReferredBy: record.get('ReferredBy') as string | undefined,
      Points: record.get('Points') as number | undefined,
      ReferralCount: record.get('ReferralCount') as number | undefined,
      IPAddress: record.get('IPAddress') as string | undefined,
      CreatedAt: record.get('CreatedAt') as string | undefined,
    };
  } catch (error) {
    console.error('Error finding user by email:', error);
    return null;
  }
}

/**
 * Count how many times an IP address has signed up
 */
export async function countSignupsByIP(ipAddress: string): Promise<number> {
  try {
    const records = await table
      .select({
        filterByFormula: `{IPAddress} = '${ipAddress}'`,
        fields: ['IPAddress'],
      })
      .all();

    return records.length;
  } catch (error) {
    console.error('Error counting signups by IP:', error);
    return 0;
  }
}

/**
 * Update a user's points and referral count
 */
export async function updateUserPoints(
  recordId: string,
  pointsToAdd: number,
  incrementReferralCount: boolean = false
): Promise<void> {
  try {
    const record = await table.find(recordId);
    const currentPoints = (record.get('Points') as number) || 0;
    const currentReferralCount = (record.get('ReferralCount') as number) || 0;

    const updates: any = {
      Points: currentPoints + pointsToAdd,
    };

    if (incrementReferralCount) {
      updates.ReferralCount = currentReferralCount + 1;
    }

    await table.update(recordId, updates);
  } catch (error) {
    console.error('Error updating user points:', error);
    throw error;
  }
}

/**
 * Get top 10 users by points for leaderboard
 */
export async function getLeaderboard(): Promise<Array<{
  rank: number;
  name: string;
  points: number;
  referralCount: number;
}>> {
  try {
    const records = await table
      .select({
        sort: [{ field: 'Points', direction: 'desc' }],
        maxRecords: 10,
        fields: ['Name', 'Points', 'ReferralCount'],
      })
      .all();

    return records.map((record, index) => {
      const fullName = record.get('Name') as string;
      const nameParts = fullName.split(' ');
      const firstName = nameParts[0];
      const lastInitial = nameParts[1] ? `${nameParts[1][0]}.` : '';
      const formattedName = lastInitial ? `${firstName} ${lastInitial}` : firstName;

      return {
        rank: index + 1,
        name: formattedName,
        points: (record.get('Points') as number) || 0,
        referralCount: (record.get('ReferralCount') as number) || 0,
      };
    });
  } catch (error) {
    console.error('Error getting leaderboard:', error);
    return [];
  }
}

export { table };
