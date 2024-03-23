import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./main.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-mont",
  weight: "500",
});

export const metadata: Metadata = {
  title: "Personal Blog System",
  description: "Personal Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
