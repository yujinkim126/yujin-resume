"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

interface ProjectImageGalleryProps {
  title: string;
  images: string[];
  isPortrait?: boolean;
}

export default function ProjectImageGallery({
  title,
  images,
  isPortrait = false,
}: ProjectImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  useEffect(() => {
    if (activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, closeLightbox]);

  return (
    <>
      <div
        className={
          isPortrait ? "grid grid-cols-2 gap-4 lg:grid-cols-3" : "flex flex-col gap-5"
        }
      >
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`group relative overflow-hidden rounded-xl card-border bg-surface-muted text-left transition-opacity hover:opacity-95 ${
              isPortrait ? "aspect-[9/16] w-full" : "aspect-[16/9] w-full"
            }`}
            aria-label={`${title} 스크린샷 ${index + 1} 확대`}
          >
            <Image
              src={image}
              alt={`${title} 스크린샷 ${index + 1}`}
              fill
              unoptimized
              className={
                isPortrait
                  ? "object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  : "object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              }
              sizes={
                isPortrait
                  ? "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 360px"
                  : "(max-width: 768px) 100vw, 1024px"
              }
            />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-8"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="스크린샷 확대 보기"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-text-primary transition-colors hover:bg-white"
            aria-label="닫기"
          >
            <X className="h-5 w-5" strokeWidth={1.75} />
          </button>

          <div
            className={`relative max-h-[90vh] w-full ${
              isPortrait ? "max-w-md" : "max-w-6xl"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className={`relative w-full overflow-hidden rounded-xl bg-black/20 ${
                isPortrait ? "aspect-[9/16]" : "aspect-[16/9]"
              }`}
            >
              <Image
                src={images[activeIndex]}
                alt={`${title} 스크린샷 ${activeIndex + 1} 확대`}
                fill
                unoptimized
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">
              {activeIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
