"use client";

import { useState } from "react";
import Script from "next/script";

interface RazorpayButtonProps {
  programId: string;
  programName: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function RazorpayButton({ programId, programName, className, style, children }: RazorpayButtonProps) {
  const [isLoading, setIsLoading] = useState(false);

  const makePayment = async () => {
    setIsLoading(true);

    try {
      // 1. Create order on our Next.js backend
      const res = await fetch("/api/razorpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ programId }),
      });
      
      const order = await res.json();

      if (!order.id) {
        throw new Error(order.error || "Failed to create order");
      }

      // 2. Initialize Razorpay Checkout
      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: order.amount,
        currency: order.currency,
        name: "VMind",
        description: programName,
        order_id: order.id,
        handler: function (response: any) {
          // This runs when payment is successful
          // Redirect the user to our brand new beautiful Thank You page!
          window.location.href = "/thank-you";
        },
        prefill: {
          name: "John Doe",
          email: "johndoe@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#E8185A", // Match MarryWise branding color
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
      
    } catch (error) {
      console.error(error);
      alert("Something went wrong with the payment!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Script
        id="razorpay-checkout-js"
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="lazyOnload"
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          makePayment();
        }}
        disabled={isLoading}
        className={`cursor-pointer hover:cursor-pointer ${className || ""}`}
        style={{ cursor: "pointer", ...style }}
      >
        {isLoading ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    </>
  );
}
