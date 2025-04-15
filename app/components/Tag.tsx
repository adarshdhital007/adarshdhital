import React from 'react';

type TagVariant = 'default' | 'outline' | 'subtle';
type TagSize = 'sm' | 'md';
type TagColor = 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'neutral';

type TagProps = {
  children: React.ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  color?: TagColor;
  className?: string;
};

export default function Tag({
  children,
  variant = 'default',
  size = 'sm',
  color = 'blue',
  className = '',
}: TagProps) {
  const variantClasses = {
    default: {
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-300 dark:text-blue-400',
      green: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      purple: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      orange: 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300',
      red: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300',
      neutral: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300',
    },
    outline: {
      blue: 'border border-blue-300 text-blue-700 dark:border-blue-800 dark:text-blue-400',
      green: 'border border-green-300 text-green-700 dark:border-green-800 dark:text-green-400',
      purple: 'border border-purple-300 text-purple-700 dark:border-purple-800 dark:text-purple-400',
      orange: 'border border-orange-300 text-orange-700 dark:border-orange-800 dark:text-orange-400',
      red: 'border border-red-300 text-red-700 dark:border-red-800 dark:text-red-400',
      neutral: 'border border-neutral-300 text-neutral-700 dark:border-neutral-700 dark:text-neutral-400',
    },
    subtle: {
      blue: 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400',
      green: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
      purple: 'bg-purple-50 text-purple-700 dark:bg-purple-900/10 dark:text-purple-400',
      orange: 'bg-orange-50 text-orange-700 dark:bg-orange-900/10 dark:text-orange-400',
      red: 'bg-red-50 text-red-700 dark:bg-red-900/10 dark:text-red-400',
      neutral: 'bg-neutral-50 text-neutral-700 dark:bg-neutral-800/50 dark:text-neutral-400',
    },
  };

  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2 rounded',
    md: 'text-sm py-1 px-3 rounded-md',
  };

  const classes = `
    inline-flex items-center font-medium
    ${sizeClasses[size]} 
    ${variantClasses[variant][color]} 
    ${className}
  `;

  return <span className={classes}>{children}</span>;
} 