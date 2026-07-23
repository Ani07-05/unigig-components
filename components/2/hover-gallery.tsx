
import * as React from "react";
import { cn } from "@/lib/utils";

export interface HoverGalleryImage {
  src: string;
  alt?: string;
}

export interface HoverGalleryProps {
  images: HoverGalleryImage[];
  className?: string;
}

function HoverGallery({ images, className }: HoverGalleryProps) {
  return (
    <div className={cn("group flex items-center", className)}>
      {images.map((img, i) => (
        <div
          key={i}
          style={{ zIndex: images.length - i }}
          className={cn(
            "h-16 w-16 shrink-0 overflow-hidden rounded-md border border-c-line bg-c-bg-2 transition-all duration-300 ease-out",
            i > 0 && "-ml-6 group-hover:ml-1",
            "group-hover:scale-110 group-hover:shadow-c"
          )}
        >
          <img src={img.src} alt={img.alt ?? ""} className="h-full w-full object-cover" />
        </div>
      ))}
    </div>
  );
}

export { HoverGallery };
