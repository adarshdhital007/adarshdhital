"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/utils";
import {
  Home,
  FileText,
  Mail,
  NotebookPen,
  GalleryHorizontalEnd,
  Book,
} from "lucide-react";
import { ThemeSwitch } from "./ThemeSwitch";

// Map navLinks to icons
const getIconForLink = (label: string) => {
  switch (label.toLowerCase()) {
    case "home":
      return <Home className="w-full h-full p-1.5" />;
    case "resume":
      return <FileText className="w-full h-full p-1.5" />;
    case "writings":
      return <NotebookPen className="w-full h-full p-1.5" />;
    case "photos":
      return <GalleryHorizontalEnd className="w-full h-full p-1.5" />;
    case "contact":
      return <Mail className="w-full h-full p-1.5" />;
    case "books":
      return <Book className="w-full h-full p-1.5" />;
    default:
      return <Home className="w-full h-full p-1.5" />;
  }
};

export default function MacOSDock() {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (href: string) =>
    href === "/writings" ? pathname.startsWith("/writings") : pathname === href;

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    isExternal: boolean
  ) => {
    if (href === "/resume") {
      event.preventDefault();
      window.open("/Resume.pdf", "_blank");
    }
  };

  // Create navigation icons from navLinks
  const navigationIcons = navLinks.map((link) => ({
    ...link,
    icon: getIconForLink(link.label),
  }));

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div
        className="relative flex items-center justify-center bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md rounded-full p-3 shadow-xl border border-neutral-200 dark:border-neutral-800"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <div className="flex items-center relative space-x-3">
          {/* Navigation Icons */}
          {navigationIcons.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-8 h-8"
              onMouseEnter={() => setHoveredIndex(index)}
            >
              <Link
                href={item.href}
                onClick={(e) =>
                  item.isExternal && handleClick(e, item.href, item.isExternal)
                }
                className={`absolute inset-0 flex items-center justify-center rounded-full transition-all duration-200 ${
                  hoveredIndex === index ? "z-10" : ""
                } ${
                  isActive(item.href)
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                style={{
                  transformOrigin: "center center",
                  transform:
                    hoveredIndex === index
                      ? `scale(${
                          window.innerWidth < 640 ? 1.3 : 1.4
                        }) translateY(${
                          window.innerWidth < 640
                            ? -6
                            : window.innerWidth < 768
                            ? -8
                            : -10
                        }px)`
                      : "scale(1) translateY(0)",
                }}
              >
                {item.icon}

                {isActive(item.href) && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" />
                )}
              </Link>
            </div>
          ))}

          {/* Theme Switch */}
          <div
            className="relative flex items-center justify-center w-8 h-8"
            onMouseEnter={() => setHoveredIndex(navigationIcons.length)}
          >
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 transition-all duration-200 ${
                hoveredIndex === navigationIcons.length ? "z-10" : ""
              }`}
              style={{
                transformOrigin: "center center",
                transform:
                  hoveredIndex === navigationIcons.length
                    ? `scale(${
                        window.innerWidth < 640 ? 1.3 : 1.4
                      }) translateY(${
                        window.innerWidth < 640
                          ? -6
                          : window.innerWidth < 768
                          ? -8
                          : -10
                      }px)`
                    : "scale(1) translateY(0)",
              }}
            >
              <div className="flex items-center justify-center w-full h-full">
                <ThemeSwitch />
              </div>
            </div>

            {/* Tooltip
            {hoveredIndex === navigationIcons.length && (
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-white dark:bg-neutral-800 text-xs font-medium text-neutral-700 dark:text-neutral-200 rounded shadow-md whitespace-nowrap">
                Theme
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
