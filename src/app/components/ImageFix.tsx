import React from "react";
import Image, { StaticImageData } from "next/image";

interface AlignedImageProps {
  src: StaticImageData;
  alt: string;
  width: number;
  priority?: boolean;
}

const AlignedImage: React.FC<AlignedImageProps> = ({
  src,
  alt,
  width,
  priority = false,
}) => {
  return (
    <div style={{ position: "absolute", top: 0, left: 0, height: "auto" }}>
      <Image
        src={src}
        alt={alt}
        width={width}
        priority={priority}
        layout="responsive"
      />
    </div>
  );
};

export default AlignedImage;
