import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaurav - Frontend Developer",
  description: "",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarCanvas />
        {children}
      </body>
    </html>
  );
}
