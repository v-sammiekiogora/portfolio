"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { personalPhotos } from "@/data/photos";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function PhotoStrip() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activePhoto =
    activeIndex === null ? null : personalPhotos[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === null
        ? 0
        : (current - 1 + personalPhotos.length) % personalPhotos.length,
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === null ? 0 : (current + 1) % personalPhotos.length,
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex]);

  return (
    <section className="site-shell section-rule compact-section">
      <div className="compact-heading">
        <div>
          <p className="eyebrow">Life lately</p>
          <h2 className="display compact-title">Away from the screen.</h2>
        </div>
        <p className="compact-copy">
          Farming, hiking, football, interesting places, and details worth
          stopping for. These spaces are ready for my own photographs — never
          stock images.
        </p>
      </div>
      <div className="photo-grid">
        {personalPhotos.map((photo, index) => (
          <button
            className="photo-trigger"
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open ${photo.title} in gallery`}
            key={photo.title}
          >
            <figure
              className={`photo-placeholder${photo.src ? " has-photo" : ""}`}
            >
              {photo.src && (
                <Image
                  src={`${basePath}${photo.src}`}
                  alt={photo.alt}
                  fill
                  sizes="140px"
                />
              )}
              <figcaption>{photo.title}</figcaption>
            </figure>
          </button>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="gallery-overlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-title"
          onClick={() => setActiveIndex(null)}
        >
          <button
            className="gallery-close"
            type="button"
            onClick={() => setActiveIndex(null)}
          >
            Close <span aria-hidden="true">×</span>
          </button>
          <button
            className="gallery-control"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous photo"
          >
            ←
          </button>
          <figure
            className="gallery-figure"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-image">
              {activePhoto.src ? (
                <Image
                  src={`${basePath}${activePhoto.src}`}
                  alt={activePhoto.alt}
                  fill
                  sizes="(min-width: 700px) 480px, 70vw"
                />
              ) : (
                <div className="gallery-empty" aria-hidden="true">
                  <span>Photo coming soon</span>
                </div>
              )}
            </div>
            <figcaption>
              <span id="gallery-title">{activePhoto.title}</span>
              <small>
                {activeIndex + 1} / {personalPhotos.length}
              </small>
            </figcaption>
          </figure>
          <button
            className="gallery-control"
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}
