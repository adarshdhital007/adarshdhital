import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const navLinks = [
  { href: "/", label: "intro." },
  { href: "/books", label: "books" },
  { href: "/writings", label: "writings" },
  { href: "/photos", label: "photos" },
  { href: "/resume", label: "resume", isExternal: true },
];
