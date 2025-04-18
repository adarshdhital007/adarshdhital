import React from "react";

interface PageHeroProps {
  readonly title: React.ReactNode;
  readonly subtitle?: string;
  readonly isOpenToWork?: boolean;
  readonly description?: string;
  readonly children?: React.ReactNode;
  readonly className?: string;
}

export default function PageHero({
  title,
  subtitle,
  isOpenToWork,
  description,
  children,
  className = "",
}: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden pb-8 ${className}`}>
      <div className="relative max-w-4xl mx-auto pt-12">
        {subtitle && (
          <div className="flex items-center space-x-2 px-4">
            {isOpenToWork ? (
              <span className="relative flex size-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
              </span>
            ) : (
              <div className="h-1 w-12 bg-gradient-to-r from-blue-600 to-purple-600"></div>
            )}

            <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </span>
          </div>
        )}

        <h1 className="px-4 text-3xl sm:text-4xl md:text-5xl leading-[36px] sm:leading-[40px] md:leading-[60px] font-bold tracking-tight mb-6">
          {title}
        </h1>

        {description && (
          <p className="px-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
