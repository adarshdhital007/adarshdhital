import React from "react";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  blurDataUrl?: string;
  placeholder?: "blur" | "empty";
};

const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt = "",
  width,
  height,
  className = "",
  blurDataUrl,
  placeholder,
}) => {
  return (
    <div className={`relative`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={true}
        placeholder={placeholder}
        blurDataURL={blurDataUrl}
        className={`h-full ${className}`}
      />
    </div>
  );
};

export default CustomImage;
