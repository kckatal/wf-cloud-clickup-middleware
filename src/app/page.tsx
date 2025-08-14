"use client";
import type { NextApiRequest, NextApiResponse } from 'next';

const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN!;
const CLICKUP_LIST_ID = process.env.CLICKUP_LIST_ID!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { Name, Email, Comment } = req.body;

  if (!Name || !Email || !Comment) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  try {
    const clickupResponse = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
      method: 'POST',
      headers: {
        Authorization: CLICKUP_API_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: `Feedback Submission: ${Name}`,
        description: `**Name:** ${Name}\n\n**Email:** ${Email}\n\n**Message:** ${Comment}`,
        status: 'to do',
      }),
    });

    if (!clickupResponse.ok) {
      const errorBody = await clickupResponse.text(); // Grab error body for logging
      console.error('ClickUp API Error:', errorBody);
      return res.status(500).json({ message: 'Error creating task in ClickUp' });
    }

    return res.status(200).json({ message: 'Task created successfully' });
  } catch (error: any) {
    console.error('Unexpected error:', error.message);
    return res.status(500).json({ message: 'Server error' });
  }
}