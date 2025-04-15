import React from "react";
import Section from "./Section";
import ExperienceItem, { ExperienceItemProps } from "./ExperienceItem";

interface ExperienceProps {
  experiences: ExperienceItemProps[];
  title?: string;
}

const Experience: React.FC<ExperienceProps> = ({ 
  experiences,
  title = "Work Experience" 
}) => {
  return (
    <Section title={title}>
      <div className="space-y-12">
        {experiences.map((experience) => (
          <ExperienceItem
            key={experience.company}
            title={experience.title}
            company={experience.company}
            period={experience.period}
            description={experience.description}
            achievements={experience.achievements}
            technologies={experience.technologies}
          />
        ))}
      </div>
    </Section>
  );
};

export default Experience; 