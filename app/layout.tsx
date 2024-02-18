import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "My Portfolio | Home",
  description: "My portfolio for professional skills class",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="fixed w-full left-0 top-0  flex justify-center pt-4 z-10">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
