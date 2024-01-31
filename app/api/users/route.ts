import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

// techinically won't use the request params,
// but Next will cahce it otherwise
// So better keep it here
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(users);
}
