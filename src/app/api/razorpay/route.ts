import { NextResponse } from "next/server";
// import Razorpay from "razorpay";
// import { getCatalogItem } from "@/data/catalog";

// const razorpay = new Razorpay({
//   key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || process.env.RAZORPAY_KEY_ID || "",
//   key_secret: process.env.RAZORPAY_KEY_SECRET || "",
// });

/**
 * Razorpay API route disabled and commented out.
 * Direct checkout handled via TagMango:
 * https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9
 */
export async function POST() {
  return NextResponse.json(
    { 
      status: "disabled", 
      message: "Razorpay integration is currently disabled. Please use the direct TagMango checkout link: https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9",
      checkoutUrl: "https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9"
    },
    { status: 200 }
  );
}

/*
export async function POST_PREVIOUS(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { 
      programId, 
      itemId, 
      courseId, 
      bookingId, 
      serviceId,
      amount: rawAmount,
      customerName, 
      customerEmail, 
      customerPhone 
    } = body;

    const requestedId = programId || itemId || courseId || bookingId || serviceId;
    
    // Resolve item safely from our catalog
    let item = requestedId ? getCatalogItem(requestedId) : null;

    // Fallback: If rawAmount is provided (e.g., from older webinar page), match 499, 1, or 10 to marrywise-webinar
    if (!item && (rawAmount === 499 || rawAmount === 1 || rawAmount === 10)) {
      item = getCatalogItem("marrywise-webinar");
    }

    if (!item) {
      item = getCatalogItem("marrywise-webinar");
    }

    const finalAmountInPaise = Math.round(item.price * 100);

    const order = await razorpay.orders.create({
      amount: finalAmountInPaise,
      currency: "INR",
      receipt: "rcpt_" + Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6),
      notes: {
        itemId: item.id,
        serviceId: item.tagmangoServiceId || "6ad86d03aa1a5b2f036ee3d9",
        tagmangoServiceId: item.tagmangoServiceId || "6ad86d03aa1a5b2f036ee3d9",
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
        category: item.category,
        tagmangoServiceId: item.tagmangoServiceId
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
*/
