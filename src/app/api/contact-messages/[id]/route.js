import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import ContactMessage from "@/models/contactMessage";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const msg = await ContactMessage.findById(id);
    if (!msg) throw new Error("Message not found");
    return NextResponse.json({ msg }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't get message" }, { status: 404 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const data = await request.json();
    const exists = await ContactMessage.findById(id);
    if (!exists) throw new Error("Message doesn't exist");
    const updated = await ContactMessage.findByIdAndUpdate(id, {
      ...data,
      updateDate: localTime(),
    });
    return NextResponse.json({ message: "Message updated", data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't update message" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connectDB();
    const exists = await ContactMessage.findById(id);
    if (!exists) throw new Error("Message doesn't exist");
    await ContactMessage.findByIdAndDelete(id);
    return NextResponse.json({ message: "Message deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't delete message" }, { status: 500 });
  }
}