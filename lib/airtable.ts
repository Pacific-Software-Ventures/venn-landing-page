export interface WaitlistSubmission {
  name: string;
  age: string;
  gender: string;
  contact: string;
}

export async function submitToAirtable(data: WaitlistSubmission) {
  try {
    const response = await fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || 'Failed to submit');
    }

    return { success: true, data: result };
  } catch (error: any) {
    console.error('Error submitting to Airtable:', error);
    return { success: false, error: error.message };
  }
}
