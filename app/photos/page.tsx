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

export default function Photos() {
  return (
    <section>
      <PageHero
        className="!pb-0"
        subtitle="My Photos"
        title={
          <>
            Not a Photographer, Just{" "}
            <GradientText className="">Observing</GradientText>
          </>
        }
        description="These aren’t professional shots — just glimpses of life I felt were worth capturing. No fancy gear, just curiosity and a camera."
      />

      <ImageGrid
        columns={3}
        images={[
          { src: "/photos/8.jpeg", alt: "Burj Khalifa Top View" },
          { src: "/photos/3.jpeg", alt: "Side View Car" },
          { src: "/photos/1.jpeg", alt: "Front View Car" },
          { src: "/photos/12.jpeg", alt: "Making of Burj Khalifa" },
          { src: "/photos/15.jpeg", alt: "Miracle Garden Horse" },
          { src: "/photos/7.jpeg", alt: "Shadow of Burj Khalifa" },
          { src: "/photos/9.jpeg", alt: "Burj Khalifa Top Car View" },
          { src: "/photos/5.jpeg", alt: "Night View Skyscraper" },
          { src: "/photos/10.jpeg", alt: "Burj Khalifa 2" },
          { src: "/photos/16.jpeg", alt: "Miracle Garden Clock" },
          { src: "/photos/6.jpeg", alt: "Skyscraper 1" },
          { src: "/photos/11.jpeg", alt: "Ornament Burj Khalifa" },
          { src: "/photos/4.jpeg", alt: "Yacht" },
          { src: "/photos/13.jpeg", alt: "Burj Khalifa 3" },
          { src: "/photos/2.jpeg", alt: "Skyscraper 2" },
          { src: "/photos/14.jpeg", alt: "Camel Desert" },
        ]}
      />
    </section>
  );
}
