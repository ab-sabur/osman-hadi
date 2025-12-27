import connectDB from '@/config/db';
import ContactMessage from '@/models/contactMessage';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const msg = await ContactMessage.findById(id);
    if (!msg) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ message: msg }, { status: 200 });
  } catch (error) {
    console.error('Contact message GET by id error:', error);
    return NextResponse.json({ error: error.message || 'Error' }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const data = await request.json();
    const updated = await ContactMessage.findByIdAndUpdate(id, { $set: data }, { new: true });
    if (!updated) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ message: 'Updated', item: updated }, { status: 200 });
  } catch (error) {
    console.error('Contact message PUT error:', error);
    return NextResponse.json({ error: error.message || 'Update failed' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const deleted = await ContactMessage.findByIdAndDelete(id);
    if (!deleted) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({ message: 'Deleted' }, { status: 200 });
  } catch (error) {
    console.error('Contact message DELETE error:', error);
    return NextResponse.json({ error: error.message || 'Delete failed' }, { status: 500 });
  }
}
