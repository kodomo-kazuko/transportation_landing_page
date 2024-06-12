import React from "react";
import Image, { StaticImageData } from "next/image";

interface AlignedImageProps {
  src: StaticImageData;
  alt: string;
  priority?: boolean;
}

const AlignedImage: React.FC<AlignedImageProps> = ({
  src,
  alt,
  priority = false,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
      }}
    >
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority={priority}
      />
    </div>
  );
};

export default AlignedImage;
