import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Cairo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import Providers from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["100", "300", "400", "700"] });
const cairo = Cairo({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: "MyCourse.io",
  description: "Online platform for serving various courses in variouse fields",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${inter.className} bg-neutral-100`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
