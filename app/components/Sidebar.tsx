"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { ThemeSwitch } from "./ThemeSwitch";
import { navLinks } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/writings" ? pathname.startsWith("/writings") : pathname === href;

  // Add useEffect to handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 630 && open) {
        setOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [open]); // Dependency on open state to ensure the latest value is used

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-[20px] h-[20px]" />
      </SheetTrigger>
      <SheetContent
        className="p-4 bg-white dark:bg-neutral-900 flex flex-col w-[95%] mx-auto rounded-t-xl"
        side={"bottom"}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Adarsh's Personal Sidebar</SheetTitle>
          <SheetDescription>Adarsh's Personal Description</SheetDescription>
        </SheetHeader>
        <div className="pl-3 text-base font-bold">index.</div>
        <nav className="flex flex-col space-y-2">
          <nav className="flex flex-col space-y-2">
            {navLinks.map(({ href, label, isExternal }) => (
              <Link
                key={href}
                href={href}
                target={isExternal ? "_blank" : ""}
                className={`px-3 py-2 rounded-lg transition-all ${
                  isActive(href)
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>
        </nav>
        <div className="flex mt-auto justify-end w-full border-t border-neutral-200 dark:border-neutral-800 pt-4">
          <ThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
