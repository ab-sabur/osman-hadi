import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import ContactMessage from "@/models/contactMessage";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const msg = new ContactMessage({
      name: data.name,
      email: data.email,
      subject: data.subject || "",
      message: data.message,
      is_read: false,
      createDate: localTime(),
    });
    await msg.save();
    return NextResponse.json({ message: "Message received" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't send message" }, { status: 500 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const messages = await ContactMessage.find().sort({ createDate: -1 });
    return NextResponse.json({ messages }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Couldn't fetch messages" }, { status: 500 });
  }
}