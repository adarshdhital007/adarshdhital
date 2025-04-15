"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ThemeSwitch } from "./ThemeSwitch";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Disable scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

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

  const navLinks = [
    { href: "/", label: "intro." },
    { href: "/books", label: "books" },
    { href: "/writings", label: "writings" },
    { href: "/photos", label: "photos" },
    { href: "/resume", label: "resume", isExternal: true },
  ];

  const isActive = (href: string) =>
    href === "/writings" ? pathname.startsWith("/writings") : pathname === href;

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href === "/resume") {
      event.preventDefault();
      window.open("/resume.pdf", "_blank");
    }
  };

  const renderNavLinks = () =>
    navLinks.map(({ href, label, isExternal }) =>
      isExternal ? (
        <a
          key={href}
          href={href}
          className={`px-3 py-2 rounded-lg transition-all text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-blue-600 dark:hover:text-blue-400`}
          onClick={(e) => handleClick(e, href)}
        >
          {label}
        </a>
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
    <>
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

          {/* Mobile Menu Toggle */}
          <button
            className="tablet:hidden z-[52] rounded hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 shadow-sm"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-neutral-800 dark:text-neutral-200 z-[52]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Menu */}
      {mounted && (
        <aside
          className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-neutral-900 shadow-lg z-[53] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full p-4">
            <div className="mb-6">
              <Link href="/" className="text-xl font-bold">
                adarsh.dhital
              </Link>
            </div>
            <nav className="flex flex-col space-y-2">{renderNavLinks()}</nav>
            <div className="flex mt-auto justify-end w-full border-t border-neutral-200 dark:border-neutral-800 pt-4">
              <ThemeSwitch />
            </div>
          </div>
        </aside>
      )}

      {/* Overlay */}
      {mounted && isMobile && isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 dark:bg-black/50 z-[51]"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
}
