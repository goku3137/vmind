"use client";

import React from "react";
import Link from "next/link";

interface RazorpayButtonProps {
  programId: string;
  programName?: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * Universal payment button.
 * Razorpay integration commented out — redirects directly to TagMango course pay section.
 */
export default function RazorpayButton({ 
  programId, 
  programName, 
  className, 
  style, 
  children 
}: RazorpayButtonProps) {
  // Direct redirect to TagMango checkout section:
  const TAGMANGO_CHECKOUT_URL = "https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9";

  // COMMENTED OUT RAZORPAY INTEGRATION:
  // const targetUrl = `/razorpay?item=${encodeURIComponent(programId || "marrywise-webinar")}`;

  const isOneToOne = programId === "marrywise-session";
  const targetUrl = isOneToOne 
    ? "https://wa.me/918157039987?text=I%20want%20to%20book%20a%201-to-1%20MarryWise%20Guidance%20Session"
    : TAGMANGO_CHECKOUT_URL;

  return (
    <a
      href={targetUrl}
      className={`cursor-pointer hover:cursor-pointer inline-flex items-center justify-center ${className || ""}`}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </a>
  );
}
