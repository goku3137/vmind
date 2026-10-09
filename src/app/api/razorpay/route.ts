import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getCatalogItem } from "@/data/catalog";

const razorpay = new Razorpay({
  key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "",
  key_secret: process.env.RAZORPAY_KEY_SECRET || "",
});

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { 
      programId, 
      itemId, 
      courseId, 
      bookingId, 
      amount: rawAmount,
      customerName, 
      customerEmail, 
      customerPhone 
    } = body;

    const requestedId = programId || itemId || courseId || bookingId;
    
    // Resolve item safely from our catalog
    let item = requestedId ? getCatalogItem(requestedId) : null;

    // Fallback: If rawAmount is provided (e.g., from older webinar page), match 499 to marrywise-webinar
    if (!item && rawAmount === 499) {
      item = getCatalogItem("marrywise-webinar");
    }

    if (!item) {
      // Default to marrywise-webinar if nothing resolved
      item = getCatalogItem("marrywise-webinar");
    }

    const finalAmountInPaise = Math.round(item.price * 100);

    const order = await razorpay.orders.create({
      amount: finalAmountInPaise,
      currency: "INR",
      receipt: "rcpt_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6),
      notes: {
        itemId: item.id,
        itemTitle: item.title,
        itemCategory: item.category,
        customerName: customerName || "Guest",
        customerEmail: customerEmail || "",
        customerPhone: customerPhone || "",
        domain: "vmind.in"
      }
    });

    return NextResponse.json({
      ...order,
      item: {
        id: item.id,
        title: item.title,
        price: item.price,
        category: item.category
      },
      keyId: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Failed to create order with Razorpay" },
      { status: 500 }
    );
  }
}
