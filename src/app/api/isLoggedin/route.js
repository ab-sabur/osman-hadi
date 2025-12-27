import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    // Read the cookie from request headers
    const accessToken = request.cookies.get("access_token")?.value;

    if (!accessToken) {
      return NextResponse.json(
        { loggedIn: false, message: "No token found" },
        { status: 401 }
      );
    }

    // Verify token using your secret
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    // If verification successful, return logged in true with user id
    return NextResponse.json(
      { success: true, userId: decoded.id },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { loggedIn: false, message: error.message || "Invalid token" },
      { status: 401 }
    );
  }
}
