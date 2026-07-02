import { NextResponse } from "next/server";
import type { RegisterPayload } from "@/types/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as RegisterPayload;

  // TODO: delegate to src/services/auth.service.ts once Supabase is wired up.
  void body;

  return NextResponse.json(
    { error: "Not implemented" },
    { status: 501 }
  );
}
