"use client";

import React from 'react';

export interface Skill {
  name: string;
  level?: string;
}

export interface Category {
  title: string;
  skills: string[];
}

export interface PowerSetProps {
  categories: Category[];
  className?: string;
  labelWidth?: string;
  primaryTextColor?: string;
  secondaryTextColor?: string;
  borderColor?: string;
  spacing?: string;
}

const PowerSet: React.FC<PowerSetProps> = ({
  categories,
  className = "",
  labelWidth = "w-28",
  primaryTextColor = "text-neutral-800 dark:text-neutral-200",
  secondaryTextColor = "text-neutral-500 dark:text-neutral-400",
  borderColor = "border-gray-200 dark:border-gray-700",
  spacing = "space-y-3",
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${className}`}>
      {categories.map((category, index) => (
        <div key={index}>
          <h3 className={`text-lg font-medium mb-4 inline-block pb-1 border-b ${borderColor}`}>
            {category.title}
          </h3>
          <div className={spacing}>
            {Object.entries(
              category.skills.reduce((acc, skill) => {
                // Extract the category from the skill (format: "category:skill")
                const [cat, actualSkill] = skill.includes(":")
                  ? skill.split(":", 2)
                  : ["", skill];
                
                if (!acc[cat]) {
                  acc[cat] = [];
                }
                
                acc[cat].push(actualSkill);
                return acc;
              }, {} as Record<string, string[]>)
            ).map(([subCategory, skills]) => (
              <div key={subCategory}>
                <span className={`inline-block ${labelWidth} ${secondaryTextColor}`}>
                  {subCategory}
                </span>
                <span className={primaryTextColor}>
                  {skills.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PowerSet; 