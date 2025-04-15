import React from 'react';

interface CardGridProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export default function CardGrid({
  children,
  columns = 2,
  gap = "md",
  className = "",
}: CardGridProps) {
  // Map columns to responsive grid classes
  const columnClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  };

  // Map gap to Tailwind gap classes
  const gapClasses = {
    sm: "gap-3",
    md: "gap-4 sm:gap-5",
    lg: "gap-6 sm:gap-8",
  };

  return (
    <div
      className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}
    >
      {children}
    </div>
  );
} 