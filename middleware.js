import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Helper function to safely log the secret (for debugging only)
function logSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return "JWT_SECRET is NOT DEFINED";
  }
  return `Secret starts with: "${secret.substring(0, 5)}..."`;
}

export function middleware(req) {
  console.log("\n--- Middleware Running ---");

  const url = req.nextUrl.clone();
  const path = url.pathname;
  const token = req.cookies.get("admin_token")?.value;

  // 1. Log the path and the token it found
  console.log(`Path requested: ${path}`);
  console.log(`Token from cookie: ${token}`);

  let isTokenValid = false;

  try {
    if (token) {
      // 2. Log the secret it's about to use
      console.log(`Attempting to verify with secret: ${logSecret()}`);
      
      jwt.verify(token, process.env.JWT_SECRET);
      
      isTokenValid = true;
      console.log("✅ Token verification SUCCESSFUL");
    } else {
      console.log("No token found in cookies.");
    }
  } catch (err) {
    // 3. If verification fails, log the exact error
    console.error("❌ JWT Verification FAILED:", err.message);
    isTokenValid = false;
  }

  // --- Your existing logic ---

  if (isTokenValid) {
    if (path === "/admin/login") {
      console.log("Action: Redirecting logged-in user from /login to /admin");
      url.pathname = "/admin"; 
      return NextResponse.redirect(url);
    }
    console.log("Action: Allowing access to protected route");
    return NextResponse.next();
  }

  if (!isTokenValid) {
    if (path === "/admin/login") {
      console.log("Action: Allowing access to /login page");
      return NextResponse.next();
    }
    console.log("Action: Redirecting unauthenticated user to /login");
    url.pathname = "/admin/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
export const runtime = "nodejs";