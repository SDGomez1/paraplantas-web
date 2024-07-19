import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PostHogPageView from "@/components/PostHogProvider";
import Providers from "./Providers";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Paraplantas",
  description: "Tu web para encontrar todo lo que necesitas en paraplantas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <PostHogPageView />
          {children}
        </body>
      </Providers>
    </html>
  );
}
