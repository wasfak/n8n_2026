import { NextResponse } from "next/server";

const TARGET =
  "https://fd4mtluf.rpcl.app/webhook-test/c5b5db9a-2471-4316-8919-82e809130356";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const resp = await fetch(TARGET, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const text = await resp.text();

    return NextResponse.json(
      { ok: resp.ok, status: resp.status, data: text },
      { status: 200 },
    );
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 },
    );
  }
}
