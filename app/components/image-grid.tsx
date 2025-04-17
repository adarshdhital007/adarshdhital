"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Skeleton } from "@/components/ui/skeleton";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
  columns?: 2 | 3 | 4;
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
  columns = 3,
}) => {
  const [loadedGridImages, setLoadedGridImages] = useState<{
    [key: string]: boolean;
  }>({});
  const [loadedDialogImages, setLoadedDialogImages] = useState<{
    [key: string]: boolean;
  }>({});

  const handleGridImageLoad = (src: string) => {
    setLoadedGridImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleDialogImageLoad = (src: string) => {
    setLoadedDialogImages((prev) => ({ ...prev, [src]: true }));
  };

  const gridClass = {
    2: "grid-cols-2 sm:grid-cols-2",
    3: "grid-cols-2 sm:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-4",
  }[columns];

  return (
    <section>
      <div className={`grid ${gridClass} gap-4 mt-0 my-8 px-4`}>
        {images.map((image, index) => (
          <Dialog key={`${image.src}-${index}`}>
            <DialogTrigger asChild>
              <div className="relative aspect-square cursor-pointer">
                {image.href ? (
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={image.href}
                    className="block w-full h-full"
                  >
                    <div className="relative w-full h-full">
                      {!loadedGridImages[image.src] && (
                        <Skeleton className="absolute inset-0 rounded-lg h-[300px] w-[400px]" />
                      )}
                      <Image
                        alt={image.alt}
                        src={image.src}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        priority
                        className={`rounded-lg object-cover transition-opacity duration-300 ${
                          loadedGridImages[image.src]
                            ? "opacity-100"
                            : "opacity-0"
                        }`}
                        onLoad={() => handleGridImageLoad(image.src)}
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="relative w-full h-full">
                    {!loadedGridImages[image.src] && (
                      <Skeleton className="absolute inset-0 rounded-lg bg-primary/25" />
                    )}
                    <Image
                      alt={image.alt}
                      src={image.src}
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      priority
                      className={`rounded-lg object-cover transition-opacity duration-300 ${
                        loadedGridImages[image.src]
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                      onLoad={() => handleGridImageLoad(image.src)}
                    />
                  </div>
                )}
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0">
              <DialogTitle asChild>
                <VisuallyHidden>View full image: {image.alt}</VisuallyHidden>
              </DialogTitle>
              <DialogDescription className="sr-only">
                Image description: {image.alt}
              </DialogDescription>
              <div className="relative w-full aspect-square">
                {!loadedDialogImages[image.src] && (
                  <Skeleton className="absolute inset-0 rounded-lg" />
                )}
                <Image
                  alt={image.alt}
                  src={image.src}
                  fill
                  sizes="100vw"
                  className={`rounded-lg object-contain transition-opacity duration-300 ${
                    loadedDialogImages[image.src] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleDialogImageLoad(image.src)}
                />
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </section>
  );
};
