"use client";
import React from "react";
import Image from "next/image";

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
        {images.map((image, index) => (
          <figure key={index + image.src}>
            {image.href ? (
              <a href={image.href} target="_blank" rel="noopener noreferrer">
                <Image
                  alt={image.alt}
                  src={image.src}
                  width={500}
                  height={300}
                  className="rounded-lg"
                  priority
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                width={500}
                height={300}
                className="rounded-lg"
                priority
              />
            )}
          </figure>
        ))}
      </div>
    </>
  );
};
