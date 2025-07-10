"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-4 z-50 w-full transition-all duration-300 px-4">
      <div
        className={cn(
          "w-full max-w-7xl mx-auto flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-lg border border-white/10 ring-1 ring-white/5 shadow-lg shadow-purple-900/5 transition-all duration-300",
          isScrolled
            ? "bg-black/80 backdrop-blur-xl backdrop-saturate-150"
            : "bg-black/80 backdrop-blur-xl backdrop-saturate-150"
        )}
      >
        {/* Logo on the left */}
        <Link
          href="/"
          className="flex items-center gap-4"
          aria-label={`${SITE_NAME} homepage`}
        >
          <div className="relative h-14 w-14 overflow-hidden">
            <Image
              src="/Logo/Denarii-Logo_Icon-White.svg"
              alt="Denarii Labs Logo"
              width={56}
              height={56}
              className="h-full w-full object-contain"
              priority
              quality={100}
            />
          </div>
          <span className="text-2xl font-extrabold tracking-tight">
            {SITE_NAME}
          </span>
        </Link>

        {/* Navigation links and CTA button on the right */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8">
                {NAV_LINKS.map((link) =>
                    link.children ? (
                      <DropdownMenu key={link.href}>
                        <DropdownMenuTrigger
                        className={cn(
                            "flex items-center gap-1 text-lg font-medium transition-colors hover:text-primary",
                         pathname.startsWith(link.href)
                         ? "text-primary"
                        : "text-gray-100"
                     )} >
        
                      {link.label}
                       <ChevronDown className="h-4 w-4" />
                        </DropdownMenuTrigger>
                          <DropdownMenuContent className="bg-black border-white/10 text-white w-56">
                        {link.children.map((child) => (
                           <DropdownMenuItem key={child.href} asChild>
                             <Link
                              href={child.href}
                                className="block cursor-pointer hover:bg-purple-600">
                            {child.label}
                             </Link>
                           </DropdownMenuItem>
                                         ))}
                            </DropdownMenuContent>
                                 </DropdownMenu>
                      ) : (
                         <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary",
                        pathname === link.href ? "text-primary" : "text-gray-100"
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
        </nav>

          <Button
            asChild
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold rounded-full px-6 py-2.5 shadow-md hover:scale-105 transition-all duration-300 ease-in-out text-lg"
          >
            <a href="https://airtable.com/apphGHvP2djrz67Ij/page3HaBQAelT3whO/form" target="_blank" rel="noopener noreferrer">Apply Now</a>
          </Button>
        </div>

        <div className="md:hidden relative">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            className="text-white"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">
              {isMobileMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"}
            </span>
          </Button>

          {isMobileMenuOpen && (
            <div className="absolute top-16 right-4 bg-gradient-to-r from-black/50 to-black/30 backdrop-blur-md rounded-lg p-4 space-y-4 shadow-md shadow-white/5 border border-white/10 ring-1 ring-white/10 z-50 min-w-[200px]">
              <nav className="flex flex-col space-y-4">
                    {NAV_LINKS.map((link) =>
                            link.children ? (
                              <div key={link.href} className="space-y-2">
                                <span className="px-3 py-2 text-base font-medium text-gray-100 flex items-center justify-between">
                                  {link.label}
                                </span>
                                <div className="pl-4 space-y-2 border-l border-white/10">
                                  {link.children.map((child) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className="px-3 py-1 text-sm text-gray-300 hover:bg-purple-600 hover:text-white rounded-md transition-colors block"
                                      onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ) : (
                              <Link
                                key={link.href}
                                href={link.href}
                                className={cn(
                                  "px-3 py-2 text-base font-medium transition-colors hover:text-primary rounded-md",
                                  pathname === link.href ? "text-primary" : "text-gray-100"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {link.label}
                              </Link>
                      )
                    )}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
