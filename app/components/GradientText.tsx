import React, { ElementType, ReactNode } from 'react';

type GradientDirection = 'left-to-right' | 'right-to-left' | 'top-to-bottom';
type GradientColors = 'blue-purple' | 'green-blue' | 'orange-red' | 'multi';

type GradientTextProps = {
  children: ReactNode;
  direction?: GradientDirection;
  colors?: GradientColors;
  className?: string;
  as?: ElementType;
};

export default function GradientText({
  children,
  direction = 'left-to-right',
  colors = 'blue-purple',
  className = '',
  as: Component = 'span',
}: GradientTextProps) {
  const directionClass = {
    'left-to-right': 'bg-gradient-to-r',
    'right-to-left': 'bg-gradient-to-l',
    'top-to-bottom': 'bg-gradient-to-b',
  };

  const colorsClass = {
    'blue-purple': 'from-blue-600 to-purple-600',
    'green-blue': 'from-green-500 to-blue-600',
    'orange-red': 'from-orange-500 to-red-600',
    'multi': 'from-blue-600 via-purple-600 to-orange-500',
  };

  const gradientClass = `
    inline-block text-transparent bg-clip-text
    ${directionClass[direction]}
    ${colorsClass[colors]}
  `;

  return (
    <Component className={`${gradientClass} ${className}`}>
      {children}
    </Component>
  );
}
