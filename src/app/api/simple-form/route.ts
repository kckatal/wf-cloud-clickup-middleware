import { NextRequest, NextResponse } from 'next/server';

const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN!;
const CLICKUP_LIST_ID = process.env.CLICKUP_LIST_ID!;

function createCorsResponse(body: any, init?: ResponseInit) {
  const res = NextResponse.json(body, init);
  res.headers.set('Access-Control-Allow-Origin', '*');
  res.headers.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.headers.set('Access-Control-Max-Age', '86400');
  return res;
}

export async function OPTIONS() {
  return createCorsResponse({ ok: true });
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
      return createCorsResponse({ message: 'Content-Type must be application/json' }, { status: 415 });
    }

    const body = await request.json();
    const nameRaw = (body?.name ?? '').toString();
    const emailRaw = (body?.email ?? '').toString();
    const messageRaw = (body?.message ?? '').toString();

    const name = nameRaw.trim();
    const email = emailRaw.trim().toLowerCase();
    const message = messageRaw.trim();

    if (!name || !email || !message) {
      return createCorsResponse({ message: 'Missing required fields: name, email, message' }, { status: 400 });
    }

    if (!CLICKUP_API_TOKEN || !CLICKUP_LIST_ID) {
      return createCorsResponse({ message: 'Server misconfigured' }, { status: 500 });
    }

    const userAgent = request.headers.get('user-agent') || 'Unknown';
    const referer = request.headers.get('referer') || 'Unknown';

    const description = `**Source:** Simple Form Submission\n**User-Agent:** ${userAgent}\n**Referrer:** ${referer}\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:** ${message}`;

    const clickupResponse = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
      method: 'POST',
      headers: {
        Authorization: CLICKUP_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Contact Form: ${name}`,
        description,
        status: 'to do',
      }),
    });

    if (!clickupResponse.ok) {
      const errorBody = await clickupResponse.text();
      console.error('ClickUp API Error:', errorBody);
      return createCorsResponse({ message: 'Error creating task in ClickUp' }, { status: 502 });
    }

    return createCorsResponse({ message: 'Message received. Task created.' });
  } catch (error: any) {
    console.error('Unexpected error (simple-form):', error?.message || error);
    return createCorsResponse({ message: 'Server error' }, { status: 500 });
  }
}


