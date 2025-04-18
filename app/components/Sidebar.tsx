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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 479) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/writings" ? pathname.startsWith("/writings") : pathname === href;

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Menu className="w-[20px] h-[20px]" />
      </SheetTrigger>
      <SheetContent
        className="p-4 bg-white dark:bg-neutral-900 flex flex-col w-full"
        side={"bottom"}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Adarsh's Personal Sidebar</SheetTitle>
          <SheetDescription>Adarsh's Personal Description</SheetDescription>
        </SheetHeader>
        <div className="pl-3 text-base font-bold">index.</div>
        <nav className="flex flex-col space-y-2">
          {navLinks.map((nav) => (
            <Link
              key={nav.href}
              href={nav.href}
              onClick={() => {
                setOpen(false);
              }}
              className={`px-3 py-2 rounded-lg transition-all ${
                isActive(nav.href)
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium"
                  : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800/50 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              {nav.label}
            </Link>
          ))}
        </nav>
        <div className="flex mt-auto justify-end w-full border-t border-neutral-200 dark:border-neutral-800 pt-4">
          <ThemeSwitch />
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
