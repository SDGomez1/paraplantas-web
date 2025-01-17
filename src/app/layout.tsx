import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import PostHogPageView from "@/components/PostHogProvider";
import Providers from "./Providers";
import { cn } from "@/lib/utils";
import { Suspense } from "react";

const inter = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Paraplantas | Pagina principal",
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
          <Suspense>
            <PostHogPageView />
            {children}
          </Suspense>
        </body>
      </Providers>
    </html>
  );
}
