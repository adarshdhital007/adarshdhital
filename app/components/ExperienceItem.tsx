import React from "react";

interface Technology {
  name: string;
}

interface Achievement {
  text: string;
}

export interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: Achievement[];
  technologies: Technology[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  achievements,
  technologies,
}) => {
  return (
    <div className="relative">
      <div className="md:flex items-start gap-8">
        <div className="md:w-[35%]">
          <div className="sticky top-24">
            <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">
              {title}
            </h3>
            <p className="font-medium mb-2">{company}</p>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-4">
              {period}
            </span>
          </div>
        </div>

        <div className="md:w-[65%] mt-4 md:mt-0">
          <p
            className="text-[17px] text-neutral-700 dark:text-neutral-300 mb-6 leading-[23px]"
            dangerouslySetInnerHTML={{ __html: description }}
          />

          <div className="space-y-4">
            <div className="border-l-2 border-blue-400 dark:border-blue-600 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Key Achievements
              </h4>
              <ul className="list-disc pl-4">
                {achievements.map((achievement) => (
                  <li
                    key={achievement.text}
                    className="text-neutral-600 dark:text-neutral-400"
                  >
                    {achievement.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-green-400 dark:border-green-600 pl-4">
              <h4 className="font-semibold text-neutral-800 dark:text-neutral-200">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded text-xs"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
