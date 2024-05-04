import Footer from "@/components/shared/Footer";
import Particle from "@/components/shared/Particles";
import Header from "@/components/shared/header/Header";
import MuiProvider from "@/providers/MuiProvider";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio Oleksii",
  description: "Portfolio Oleksii Pidnebesnyi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <ReactQueryClientProvider>
          <MuiProvider>
            <Particle />
            <Header />
            {children}
            <Footer />
          </MuiProvider>
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}

