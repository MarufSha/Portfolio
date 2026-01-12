import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Background from "@/components/Background";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const InterFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Maruf Portfolio",
  description: "Protfolio website made with Nextjs and Tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.className} antialiased bg-[#0d0d1f]`}>
        <Background>
          <ResponsiveNav />
          {children}
        </Background>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
