import connectDB from '@/config/db';
import FileRequest from '@/models/file';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const requests = await FileRequest.find().sort({ createDate: -1 });
    return NextResponse.json({ requests }, { status: 200 });
  } catch (error) {
    console.error('File requests GET error:', error);
    return NextResponse.json({ error: error.message || "Couldn't fetch file requests" }, { status: 500 });
  }
}
