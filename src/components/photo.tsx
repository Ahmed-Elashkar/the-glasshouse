import { cn } from "@/lib/utils";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function Photo({ src, alt, className, imgClassName }: PhotoProps) {
  return (
    <div className={cn("overflow-hidden bg-parchment", className)}>
      <img
        src={src}
        alt={alt}
        className={cn(
          "photo-frame h-full w-full object-cover",
          imgClassName,
        )}
      />
    </div>
  );
}
