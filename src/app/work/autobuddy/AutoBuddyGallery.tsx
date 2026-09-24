"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const galleryItems = [
  {
    title: "Popular Services across devices",
    description:
      "The PWA concept brought the same garage workspace to larger screens while keeping recurring services close to the repair-order flow.",
    alt: "Desktop AutoBuddy dashboard showing performance cards, repair-order actions, and Popular Services",
    src: "/work/autobuddy/dashboard-popular-services-desktop.png",
    width: 1921,
    height: 991,
    wide: true,
  },
  {
    title: "Choose a service",
    description:
      "A focused step connects the selected vehicle to a reusable service before assigning a mechanic.",
    alt: "AutoBuddy Choose Service screen listing service options for a selected vehicle",
    src: "/work/autobuddy/choose-service.png",
    width: 410,
    height: 908,
    wide: false,
  },
  {
    title: "Confirm the repair order",
    description:
      "Service, mechanics, notes, and spare parts come together for a final review.",
    alt: "AutoBuddy repair-order confirmation screen showing service, assigned mechanics, note, and spare parts",
    src: "/work/autobuddy/repair-order-confirmation.png",
    width: 408,
    height: 855,
    wide: false,
  },
];

export function AutoBuddyGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const activeItem =
    activeIndex === null ? null : galleryItems[activeIndex];
  const isOpen = activeIndex !== null;

  const closeGallery = () => {
    const triggerIndex = activeIndex;
    setActiveIndex(null);
    requestAnimationFrame(() => {
      if (triggerIndex !== null) triggerRefs.current[triggerIndex]?.focus();
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        const triggerIndex = activeIndex;
        setActiveIndex(null);
        requestAnimationFrame(() => {
          if (triggerIndex !== null) triggerRefs.current[triggerIndex]?.focus();
        });
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((current) =>
          current === null
            ? 0
            : (current - 1 + galleryItems.length) % galleryItems.length,
        );
      }
      if (event.key === "ArrowRight") {
        setActiveIndex((current) =>
          current === null ? 0 : (current + 1) % galleryItems.length,
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, isOpen]);

  return (
    <>
      <div className={styles.visualGrid}>
        {galleryItems.map((item, index) => (
          <figure
            className={`${styles.productVisual}${
              item.wide ? ` ${styles.productVisualWide}` : ""
            }`}
            key={item.title}
          >
            <button
              aria-label={`Open ${item.title} image`}
              className={styles.productVisualTrigger}
              onClick={() => setActiveIndex(index)}
              ref={(element) => {
                triggerRefs.current[index] = element;
              }}
              type="button"
            >
              <span className={styles.productVisualFrame}>
                <Image
                  alt={item.alt}
                  height={item.height}
                  src={`${basePath}${item.src}`}
                  width={item.width}
                />
                <span className={styles.productVisualHint} aria-hidden="true">
                  View details ↗
                </span>
              </span>
            </button>
            <figcaption>
              <span>
                {String(index + 1).padStart(2, "0")} · {item.title}
              </span>
              {item.description}
            </figcaption>
          </figure>
        ))}
      </div>

      {activeItem && activeIndex !== null && (
        <div
          aria-labelledby="autobuddy-gallery-title"
          aria-modal="true"
          className={styles.galleryOverlay}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) closeGallery();
          }}
          role="dialog"
        >
          <div className={styles.galleryDialog}>
            <div className={styles.galleryTopline}>
              <p>
                {String(activeIndex + 1).padStart(2, "0")} /{" "}
                {String(galleryItems.length).padStart(2, "0")}
              </p>
              <button
                className={styles.galleryClose}
                onClick={closeGallery}
                ref={closeButtonRef}
                type="button"
              >
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <figure className={styles.galleryDetail}>
              <div className={styles.galleryImage}>
                <Image
                  alt={activeItem.alt}
                  fill
                  sizes="90vw"
                  src={`${basePath}${activeItem.src}`}
                />
              </div>
              <figcaption>
                <h3 id="autobuddy-gallery-title">{activeItem.title}</h3>
                <p>{activeItem.description}</p>
              </figcaption>
            </figure>
            <div className={styles.galleryControls}>
              <button
                aria-label="View previous AutoBuddy image"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + galleryItems.length) %
                      galleryItems.length,
                  )
                }
                type="button"
              >
                ← Previous
              </button>
              <button
                aria-label="View next AutoBuddy image"
                onClick={() =>
                  setActiveIndex((activeIndex + 1) % galleryItems.length)
                }
                type="button"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
