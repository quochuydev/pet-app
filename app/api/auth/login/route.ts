import { NextRequest, NextResponse } from "next/server";
import { SignJWT } from "jose";
import { ADMIN_PIN, JWT_SECRET } from "@/lib/config";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { pin } = body;

    // Validate PIN
    if (!pin) {
      return NextResponse.json(
        { error: "PIN is required" },
        { status: 400 }
      );
    }

    // Check if PIN matches
    if (pin !== ADMIN_PIN) {
      return NextResponse.json(
        { error: "Invalid PIN" },
        { status: 401 }
      );
    }

    // Generate JWT token
    const secret = new TextEncoder().encode(JWT_SECRET);
    const token = await new SignJWT({ role: "admin" })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("24h")
      .sign(secret);

    // Create response with token in cookie
    const response = NextResponse.json({
      success: true,
      message: "Login successful",
    });

    // Set HTTP-only cookie
    response.cookies.set("auth-token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Authentication failed" },
      { status: 500 }
    );
  }
}
