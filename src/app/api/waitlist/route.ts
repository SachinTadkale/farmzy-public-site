import { NextResponse } from "next/server";
import { z } from "zod";

const waitlistSchema = z.object({
  email: z.email("Email must be valid").trim().toLowerCase(),
  role: z.enum(["FARMER", "COMPANY"]),
  name: z.string().trim().optional(),
});

const getBackendUrl = () =>
  process.env.FARMZY_BACKEND_URL ||
  process.env.NEXT_PUBLIC_BACKEND_URL ||
  "http://localhost:5000";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedBody = waitlistSchema.safeParse(body);

    if (!parsedBody.success) {
      return NextResponse.json(
        {
          success: false,
          message: parsedBody.error.issues[0]?.message || "Invalid waitlist data",
        },
        { status: 400 },
      );
    }

    const backendResponse = await fetch(`${getBackendUrl()}/api/leads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: parsedBody.data.email,
        role: parsedBody.data.role,
        name: parsedBody.data.name || undefined,
      }),
      cache: "no-store",
    });

    const responseData = await backendResponse.json().catch(() => null);

    if (!backendResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: responseData?.message || "Failed to join waitlist",
        },
        { status: backendResponse.status },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: responseData?.message || "Successfully joined the waitlist",
        data: responseData?.data,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Waitlist API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to connect to the waitlist service right now",
      },
      { status: 502 },
    );
  }
}
