import { jwtVerify } from "jose";
import { NextRequest } from "next/server";
import { JWT_SECRET } from "./config";

export async function verifyAuth(request: NextRequest): Promise<boolean> {
  try {
    const token = request.cookies.get("auth-token")?.value;

    if (!token) {
      return false;
    }

    const secret = new TextEncoder().encode(JWT_SECRET);
    await jwtVerify(token, secret);

    return true;
  } catch (error) {
    return false;
  }
}
