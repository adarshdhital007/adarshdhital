"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { navLinks } from "@/lib/utils";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Detect mobile and close menu if resized to desktop
  useEffect(() => {
    setMounted(true);
    const checkIsMobile = () => {
      const mobile = window.innerWidth < 768;
      if (!mobile && isMenuOpen) setIsMenuOpen(false);
      setIsMobile(mobile);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [isMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/writings" ? pathname.startsWith("/writings") : pathname === href;

  const renderNavLinks = () =>
    navLinks.map(({ href, label, isExternal }) =>
      isExternal ? (
        <Link
          target="_blank"
          key={href}
          href={href}
          className="px-3 py-2 rounded-lg transition-all text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-blue-600 dark:hover:text-blue-400"
        >
          {label}
        </Link>
      ) : (
        <Link
          key={href}
          href={href}
          className={`px-3 py-2 rounded-lg transition-all ${
            isActive(href)
              ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
              : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          {label}
        </Link>
      )
    );

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="container max-w-4xl mx-auto px-4 flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-xl font-bold bg-gradient-to-r bg-clip-text"
        >
          adarsh.dhital
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden tablet:flex items-center space-x-1">
          {renderNavLinks()}
          <ThemeSwitch />
        </nav>

        <div
          className="tablet:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Sidebar />
        </div>
      </div>
    </header>
  );
}
