import { ExperienceItemProps } from "app/components/ExperienceItem";

export const experiences: ExperienceItemProps[] = [
  {
    title: "Junior Software Engineer",
    company: "Vertex Special Technology",
    period: "2023 - Present",
    description: `Contributed to the design and development of <span class="font-medium">websites and mobile applications</span> using <span class="font-medium">Angular</span>, <span class="font-medium">React</span>, <span class="font-medium">Node.js</span>, <span class="font-medium">Typescript</span> and <span class="font-medium">MongoDB</span>.`,
    achievements: [
      {
        text: "Migrated a production Angular codebase from v16 to v18, leveraging the latest features for performance and maintainability.",
      },
      {
        text: "Reduced tight coupling between services by introducing signal-based communication patterns and dependency isolation.",
      },
      {
        text: "Eliminated unnecessary async pipes and overuse of Observables, improving runtime performance through fine-grained reactivity.",
      },
      {
        text: "Built robust reactive forms with dynamic validations.",
      },
    ],
    technologies: [
      { name: "Angular" },
      { name: "React / Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "TypeScript" },
      { name: "CI/CD" },
    ],
  },
];

export default experiences;
