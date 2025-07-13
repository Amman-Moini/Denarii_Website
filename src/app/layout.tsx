import { PageTransition } from '@/components/layout/page-transition';
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { SITE_NAME } from "@/lib/constants";


export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Pioneering the future of decentralized technologies. Denarii Labs offers accelerator programs, tokenomics consulting, and research insights.",
  icons: {
    icon: "/Logo/Denarii-Logo_Icon-Black.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased bg-gray-950 text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Background grid pattern */}
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px] bg-fixed bg-top bg-repeat opacity-10 pointer-events-none z-0"></div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
              <PageTransition>{children}</PageTransition>
            <Footer />
          </div>

          <Toaster />
        </div>
      </body>
    </html>
  );
}
