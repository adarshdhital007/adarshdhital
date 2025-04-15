import Experience from "app/components/Experience";
import PageHero from "app/components/PageHero";
import PowerSet from "app/components/PowerSet";
import Section from "app/components/Section";
import experiences from "data/experience";
import Image from "next/image";
import { RevealMe } from "./components/RevealMe";
import { useEffect, useState } from "react";

export default function Home() {
  const skillCategories = [
    {
      title: "Frontend & UI",
      skills: [
        "FWs: React, Angular, Next.js",
        "Langs: JavaScript, TypeScript, HTML5, CSS3, Sass",
        "Design: Responsive UI, Component Systems",
        "State Mgmt: Redux",
      ],
    },
    {
      title: "Backend & Systems",
      skills: [
        "API / Tech: REST, Node.js",
        "P/L: JavaScript, TypeScript, Java",
        "DBs: MongoDB, MySQL, Firebase",
        "DevOps: Docker, CI/CD",
      ],
    },
  ];

  return (
    <>
      <PageHero
        isOpenToWork
        subtitle="Open to Work"
        title={
          <>
            Adarsh Dhital
            <span className="text-blue-600 dark:text-blue-400">.</span>
          </>
        }
      >
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:px-4">
          <figure className="md:col-span-1 flex justify-center relative w-full h-72 md:h-auto">
            <Image
              src="/images/headshot.jpg"
              alt="Adarsh Dhital"
              width={408}
              height={408}
              className="hidden md:block w-full h-full object-cover rounded-3xl"
              priority
            />

            <Image
              src="/images/landscape.jpg"
              alt="Adarsh Dhital"
              fill
              className="block md:hidden object-cover"
              priority
            />
          </figure>

          <article className="md:col-span-2 flex flex-col gap-4 md:px-0 px-4">
            <p className="font-medium text-neutral-800 dark:text-neutral-200 text-lg md:text-xl leading-[28px] md:leading-[30px]">
              Hi, I&apos;m a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                software engineer
              </span>{" "}
              based in Kathmandu, Lalitpur.
            </p>

            <section className="flex flex-col justify-between h-full gap-3 md:gap-0 font-medium text-[17px]">
              <h3 className="text-xl font-semibold text-emerald-600 dark:text-emerald-400">
                Currently
              </h3>

              <p className="text-neutral-800 dark:text-neutral-200">
                Focused on crafting websites and apps that make an impact, but
                also redefine the boundaries of innovation. My aim is to create
                products that are both useful and visionary,
              </p>

              <p className="text-neutral-800 dark:text-neutral-200">
                Learning through action, discovery at large, creating with
                purpose. I never forget that the world around me is shaped by
                the work of others.
              </p>
            </section>
          </article>
        </section>
      </PageHero>

      <Section title="Technical Expertise">
        <section className="max-w-4xl mx-auto">
          <article className="p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-lg border border-neutral-200 dark:border-neutral-800">
            <p className="text-lg text-center mb-8">
              I transform{" "}
              <span className="underline decoration-rose-500 decoration-2 underline-offset-[4px] font-medium">
                complex challenges
              </span>{" "}
              into{" "}
              <span className="underline decoration-blue-500 decoration-2 underline-offset-[4px] font-medium">
                elegant solutions
              </span>{" "}
              by crafting{" "}
              <span className="underline decoration-amber-500 decoration-2 underline-offset-[4px] font-medium">
                intuitive interfaces
              </span>{" "}
              and{" "}
              <span className="underline decoration-emerald-500 decoration-2 underline-offset-[4px] font-medium">
                robust systems
              </span>
              .
            </p>

            <PowerSet categories={skillCategories} />
          </article>
        </section>
      </Section>

      <Experience experiences={experiences} />
    </>
  );
}
