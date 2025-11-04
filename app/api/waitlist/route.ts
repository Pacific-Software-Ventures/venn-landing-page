import { NextRequest, NextResponse } from 'next/server';
import Airtable from 'airtable';

const base = new Airtable({
  apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_TOKEN,
}).base(process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, age, gender, contact } = body;

    // Validate the data
    if (!name || !age || !gender || !contact) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create record in Airtable
    const records = await base(process.env.NEXT_PUBLIC_AIRTABLE_TABLE_ID!).create([
      {
        fields: {
          Name: name,
          Age: parseInt(age),
          Gender: gender,
          Contact: contact,
        },
      },
    ]);

    return NextResponse.json({
      success: true,
      recordId: records[0].id,
    });
  } catch (error: any) {
    console.error('Airtable submission error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to submit to Airtable' },
      { status: 500 }
    );
  }
}
