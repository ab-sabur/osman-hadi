import connectDB from '@/config/db';
import ContactMessage from '@/models/contactMessage';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const messages = await ContactMessage.find().sort({ createDate: -1 });
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    console.error('Contact messages GET error:', error);
    return NextResponse.json({ error: error.message || "Couldn't fetch messages" }, { status: 500 });
  }
}
