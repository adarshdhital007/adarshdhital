import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";
import PageHero from "app/components/PageHero";
import GradientText from "app/components/GradientText";

export const metadata: Metadata = {
  title: "Photos | Adarsh Dhital Khatri",
  description:
    "These aren’t professional shots — just glimpses of life I felt were worth capturing. No fancy gear, just curiosity and a camera.",
  alternates: {
    canonical: `https://adarshkhatri.com.np/photos`,
  },
};

export default async function Photos() {
  return (
    <section>
      <PageHero
        subtitle="Life Captured"
        title={
          <>
            Not a Photographer, Just{" "}
            <GradientText className="">Observing</GradientText>
          </>
        }
        description="These aren’t professional shots — just glimpses of life I felt were worth capturing. No fancy gear, just curiosity and a camera."
      />

      <ImageGrid
        images={[
          { src: "/photos/1.jpeg", alt: "Front View Car" },
          { src: "/photos/2.jpeg", alt: "Skyscraper 2" },
          { src: "/photos/3.jpeg", alt: "Side View Car" },
          { src: "/photos/4.jpeg", alt: "Yacht" },
          { src: "/photos/5.jpeg", alt: "Night View Skyscraper" },
          { src: "/photos/6.jpeg", alt: "Skyscraper 1" },
          { src: "/photos/7.jpeg", alt: "Shadow of Burj Khalifa" },
          { src: "/photos/8.jpeg", alt: "Burj Khalifa Top View" },
          { src: "/photos/9.jpeg", alt: "Burj Khalifa Top Car View" },
          { src: "/photos/10.jpeg", alt: "Burj Khalifa 2" },
          { src: "/photos/11.jpeg", alt: "Ornament Burj Khalifa" },
          { src: "/photos/12.jpeg", alt: "Making of Burj Khalifa" },
          { src: "/photos/13.jpeg", alt: "Burj Khalifa 3" },
          { src: "/photos/14.jpeg", alt: "Camel Desert" },
          { src: "/photos/15.jpeg", alt: "Miracle Garden Horse" },
          { src: "/photos/16.jpeg", alt: "Miracle Garden Clock" },
          { src: "/photos/17.jpg", alt: "Desert" },
        ]}
      />
    </section>
  );
}
