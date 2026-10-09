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
 * Universal Razorpay payment button.
 * Routes directly to /razorpay with the dynamic programId/course/booking query parameter.
 */
export default function RazorpayButton({ 
  programId, 
  programName, 
  className, 
  style, 
  children 
}: RazorpayButtonProps) {
  const targetUrl = `/razorpay?item=${encodeURIComponent(programId || "marrywise-webinar")}`;

  return (
    <Link
      href={targetUrl}
      className={`cursor-pointer hover:cursor-pointer inline-flex items-center justify-center ${className || ""}`}
      style={{ cursor: "pointer", ...style }}
    >
      {children}
    </Link>
  );
}
