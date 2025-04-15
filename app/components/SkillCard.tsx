"use client";

import React from 'react';

interface Skill {
  name: string;
  level?: string;
}

interface SkillCardProps {
  title: string;
  description: string;
  highlightText: string;
  suffix?: string;
  skills: Skill[];
  primaryColor: string;
  textColor: string;
  borderColor: string;
  dotColor: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  description,
  highlightText,
  suffix = "",
  skills,
  primaryColor,
  textColor,
  borderColor,
  dotColor,
}) => {
  return (
    <div className="relative">
      <h3 className={`text-2xl font-bold ${textColor} mb-6 inline-block border-b-2 ${borderColor} pb-1`}>
        {title}
      </h3>

      <div>
        <p className="text-lg text-gray-800 dark:text-gray-200 mb-4">
          {description}{" "}
          <span className={`underline decoration-2 underline-offset-[5px] ${primaryColor}`}>
            {highlightText}
          </span>{" "}.
          {suffix}
        </p>

        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 gap-3">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center">
              <span className={`inline-block w-3 h-3 ${dotColor} rounded-full mr-2`}></span>
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className={`text-xs ${textColor} ml-1`}>
                {skill.level}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard; 