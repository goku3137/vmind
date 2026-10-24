import { redirect } from "next/navigation";

export default function WebinarPage() {
  // Commented out Razorpay integration:
  // redirect("/razorpay?item=marrywise-webinar");

  // Redirect directly to TagMango course pay section:
  redirect("https://learn.dreammind.in/web/checkout/6ad86d03aa1a5b2f036ee3d9");
}
