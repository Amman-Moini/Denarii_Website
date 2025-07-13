import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { SITE_NAME } from "@/lib/constants";
import { motion, AnimatePresence } from 'framer-motion';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-950 text-foreground`}
      >
        <div className="min-h-screen flex flex-col">
          {/* Background grid pattern */}
          <div className="fixed inset-0 bg-[url('/grid.svg')] bg-[length:60px_60px] bg-fixed bg-top bg-repeat opacity-10 pointer-events-none z-0"></div>

          <div className="relative z-10 flex flex-col min-h-screen">
            <Navbar />
              <AnimatePresence mode="wait">
                <motion.main
                  key={Math.random()} // Note: A better key would be the route path, but this is a simple way to trigger on every change.
                  className="flex-grow bg-gray-950"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  {children}
                </motion.main>
              </AnimatePresence>
            <Footer />
          </div>

          <Toaster />
        </div>
      </body>
    </html>
  );
}
