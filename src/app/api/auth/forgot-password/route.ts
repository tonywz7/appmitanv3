import { NextResponse } from "next/server";
import type { ForgotPasswordPayload } from "@/types/auth";

export async function POST(request: Request) {
  const body = (await request.json()) as ForgotPasswordPayload;

  // TODO: delegate to src/services/auth.service.ts once Supabase is wired up.
  void body;

  return NextResponse.json(
    { error: "Not implemented" },
    { status: 501 }
  );
}
