import React from "react";

interface SectionProps {
  children: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: string;
  description?: string;
  className?: string;
}

export default function Section({
  children,
  title,
  subtitle,
  description,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-8  ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        {(title || subtitle || description) && (
          <div className="mb-8">
            {subtitle && (
              <div className="flex items-center space-x-2 mb-3">
                <div className="h-1 w-10 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
                  {subtitle}
                </span>
              </div>
            )}

            {title && (
              <h2 className="text-xl font-bold mb-4">{title}</h2>
            )}

            {description && (
              <p className="text-neutral-600 dark:text-neutral-400 max-w-3xl">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
