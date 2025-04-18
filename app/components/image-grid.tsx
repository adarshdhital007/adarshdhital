"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <>
      <style jsx>{`
        img {
          max-width: 100%;
          display: block;
        }

        figure {
          margin: 0;
          display: grid;
          grid-template-rows: 1fr auto;
          margin-bottom: 10px;
          break-inside: avoid;
        }

        figure > img {
          grid-row: 1 / -1;
          grid-column: 1;
        }

        figure a {
          color: black;
          text-decoration: none;
        }

        figcaption {
          grid-row: 2;
          grid-column: 1;
          background-color: rgba(255, 255, 255, 0.5);
          padding: 0.2em 0.5em;
          justify-self: start;
        }

        .container {
          column-count: 3;
          column-gap: 10px;
          padding: 1rem;
        }

        @media (max-width: 1000px) {
          .container {
            column-count: 2;
          }
        }
      `}</style>

      <div className="container mx-auto max-w-7xl">
        {images.map((image, index) => {
          const [isLoading, setIsLoading] = useState(true);
          return (
            <figure key={index + image.src}>
              {image.href ? (
                <a href={image.href} target="_blank" rel="noopener noreferrer">
                  {isLoading && (
                    <Skeleton className="w-full h-[300px] rounded-lg" />
                  )}
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={500}
                    height={300}
                    className={`rounded-lg ${isLoading ? "hidden" : ""}`}
                    priority
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                </a>
              ) : (
                <>
                  {isLoading && (
                    <Skeleton className="w-full h-[300px] rounded-lg" />
                  )}
                  <Image
                    alt={image.alt}
                    src={image.src}
                    width={500}
                    height={300}
                    className={`rounded-lg ${isLoading ? "hidden" : ""}`}
                    priority
                    onLoadingComplete={() => setIsLoading(false)}
                  />
                </>
              )}
            </figure>
          );
        })}
      </div>
    </>
  );
};
