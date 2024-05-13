import Footer from "@/components/shared/Footer";
import Particle from "@/components/shared/Particles";
import Header from "@/components/shared/header/Header";
import MuiProvider from "@/providers/MuiProvider";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Seo from "@/components/shared/Seo";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oleksii Pidnebesnyi Portfolio",
  description: "Check out qualifications, my experience, projects and more",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Seo />
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

