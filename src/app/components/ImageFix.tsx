import Image, { StaticImageData } from "next/image";

interface Props {
  src: StaticImageData;
  alt: string;
  priority: boolean;
  width: number;
}

const AlignedImage = ({ src, alt, priority, width }: Props) => {
  return (
    <div style={{ position: "absolute", width: width - 13, height: "100%" }}>
      <Image
        src={src}
        alt={alt}
        priority={priority}
        style={{ position: "absolute", top: "4%" }}
      />
    </div>
  );
};

export default AlignedImage;
