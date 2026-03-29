import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { cn } from "@/lib/utils";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArogyaAura | Smart Emergency QR Tag",
  description:
    "Access medical details instantly and send emergency alerts with ArogyaAura smart QR tag.",
  keywords: [
    "ArogyaAura",
    "medical QR tag",
    "emergency QR code",
    "health safety device",
    "smart medical ID",
    "emergency alert system",
    "QR medical profile",
    "India safety tag",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.variable, "font-sans")}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
