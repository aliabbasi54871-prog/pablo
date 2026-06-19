import Image from "next/image";

interface SectionImageProps {
  src: string;
  alt: string;
  aspect?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
}

export default function SectionImage({
  src,
  alt,
  aspect = "aspect-[4/3]",
  className = "",
  imageClassName = "object-cover",
  priority = false,
  sizes = "100vw",
}: SectionImageProps) {
  return (
    <div className={`media-frame relative w-full ${aspect} ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className={imageClassName}
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
