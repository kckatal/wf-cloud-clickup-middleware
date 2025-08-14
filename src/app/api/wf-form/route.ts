import { NextRequest, NextResponse } from 'next/server';

const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN!;
const CLICKUP_LIST_ID = process.env.CLICKUP_LIST_ID!;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { Name, Email, Comment } = body;

    if (!Name || !Email || !Comment) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const clickupResponse = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
      method: 'POST',
      headers: {
        Authorization: CLICKUP_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Feedback Submission: ${Name}`,
        description: `Name: ${Name}\n\nEmail: ${Email}\n\nMessage: ${Comment}`,
        status: 'to do',
      }),
    });

    if (!clickupResponse.ok) {
      const errorBody = await clickupResponse.text();
      console.error('ClickUp API Error:', errorBody);
      return NextResponse.json(
        { message: 'Error creating task in ClickUp' },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: 'Task created successfully' });
  } catch (error: any) {
    console.error('Unexpected error:', error.message);
    return NextResponse.json(
      { message: 'Server error' },
      { status: 500 }
    );
  }
}