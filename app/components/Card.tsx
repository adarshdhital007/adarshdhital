import React from "react";
import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  variant?: "default" | "bordered" | "hover";
  className?: string;
}

export default function Card({
  children,
  href,
  variant = "default",
  className = "",
}: CardProps) {
  // Base styles all cards have
  const baseStyles = "rounded-xl overflow-hidden transition-all duration-200";

  // Variant-specific styles
  const variantStyles = {
    default: "bg-white dark:bg-neutral-800 shadow-sm border border-neutral-200 dark:border-neutral-700",
    bordered: "bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 hover:shadow-sm",
    hover: "bg-white dark:bg-neutral-800 shadow-sm hover:shadow-md",
  };

  // Combine all styles
  const cardStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  // Wrap with link if href is provided
  if (href) {
    return (
      <Link href={href} className={cardStyles}>
        <div className="p-4 sm:p-5">{children}</div>
      </Link>
    );
  }

  // Regular card without link
  return <div className={cardStyles}><div className="p-4 sm:p-5">{children}</div></div>;
}

// Sub-components for structured card content
export function CardHeader({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mb-3 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <h3 className={`text-xl font-semibold ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <p className={`text-sm text-neutral-500 dark:text-neutral-400 ${className}`}>{children}</p>;
}

export function CardContent({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={className}>{children}</div>;
}

export function CardFooter({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800 ${className}`}>{children}</div>;
} 