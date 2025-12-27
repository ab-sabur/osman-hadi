import connectDB from '@/config/db';
import Tribute from '@/models/tribute';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const tributes = await Tribute.find().sort({ createDate: -1 });
    return NextResponse.json({ tributes }, { status: 200 });
  } catch (error) {
    console.error('Tributes GET error:', error);
    return NextResponse.json({ error: error.message || "Couldn't fetch tributes" }, { status: 500 });
  }
}
