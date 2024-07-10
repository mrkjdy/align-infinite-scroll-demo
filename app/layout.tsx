import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import NavItem from "@/components/nav/NavItem";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Align Infinite Scroll Demo",
  description: "Created by Mark Judy",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html lang="en">
    <head>
      <link rel="preconnect" href="https://images.pexels.com" />
      <link rel="preconnect" href="https://videos.pexels.com" />
    </head>
    <body className={inter.className}>
      <Nav>
        <NavItem>
          Created by{" "}
          <Link href="https://mrkjdy.dev/about" className="hover:text-blue-600">
            Mark Judy
          </Link>
        </NavItem>
      </Nav>
      <main className="flex flex-col items-center mt-10 mb-20 w-full">
        {children}
      </main>
    </body>
  </html>
}
