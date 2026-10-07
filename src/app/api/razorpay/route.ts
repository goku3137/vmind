import { NextResponse } from "next/server";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

// SECURE: We store all our prices safely on the server.
// The frontend only sends the ID, and we look up the real price here.
const PROGRAM_CATALOG: Record<string, number> = {
  "marrywise-webinar": 499,
  "future-program-1": 999,
  "future-program-2": 1999,
};

export async function POST(request: Request) {
  try {
    const { programId } = await request.json();

    const amount = PROGRAM_CATALOG[programId];

    if (!amount) {
      return NextResponse.json(
        { error: "Invalid program selected" },
        { status: 400 }
      );
    }

    const order = await razorpay.orders.create({
      amount: amount * 100, // Razorpay amount is in paise
      currency: "INR",
      receipt: "receipt_" + Math.random().toString(36).substring(7),
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
