import type { Metadata } from "next";
import { Poppins, El_Messiri, Viga, Clicker_Script } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// Initialize fonts
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const elMessiri = El_Messiri({
  variable: "--font-el-messiri",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const viga = Viga({
  variable: "--font-viga",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const clickerScript = Clicker_Script({
  variable: "--font-clicker-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Best Psychologist in Trivandrum & Attingal | VMind Counselling Center",
  description: "VMind is a trusted counselling center serving Trivandrum and Attingal, Kerala. Ranjini Vijith is one of the best psychologists in Trivandrum.",
  metadataBase: new URL("https://vmind.in"),
  openGraph: {
    title: "Best Psychologist in Trivandrum & Attingal | VMind Counselling Center",
    description: "VMind is a trusted counselling center serving Trivandrum and Attingal, Kerala. Ranjini Vijith is one of the best psychologists in Trivandrum.",
    url: "https://vmind.in/",
    siteName: "Vmind",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${elMessiri.variable} ${viga.variable} ${clickerScript.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
