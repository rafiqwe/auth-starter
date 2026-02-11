import fs from "fs";
import path from "path";
import { write } from "../utils/write.js";

export function injectDynamicRoute() {
  // auth route
  const fileContent = `
import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
`;

  // check route
  const checkRouteFile = `
// app/api/auth/check/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export async function GET(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  return NextResponse.json({ user: session.user });
}

`;

  write(process.cwd(), "app/api/auth/check/route.ts", checkRouteFile);
  write(process.cwd(), "app/api/auth/[...nextauth]/route.ts", fileContent);
}
