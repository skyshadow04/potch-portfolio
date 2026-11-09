"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export type ProjectScreenshot = {
  src: string;
  alt: string;
  caption: string;
};

type ProjectGalleryProps = {
  projectName: string;
  screenshots: ProjectScreenshot[];
};

export default function ProjectGallery({
  projectName,
  screenshots,
}: ProjectGalleryProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const activeScreenshot =
    activeIndex === null ? null : screenshots[activeIndex];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (activeIndex !== null && !dialog.open) {
      dialog.showModal();
    } else if (activeIndex === null && dialog.open) {
      dialog.close();
    }
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        setActiveIndex((index) =>
          index === null ? null : (index + 1) % screenshots.length,
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((index) =>
          index === null
            ? null
            : (index - 1 + screenshots.length) % screenshots.length,
        );
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, screenshots.length]);

  function closeGallery() {
    setActiveIndex(null);
  }

  return (
    <>
      <button
        className="project-preview-button"
        type="button"
        aria-label={`View ${screenshots.length} screenshots for ${projectName}`}
        onClick={() => setActiveIndex(0)}
      >
        <Image
          className="project-image"
          src={screenshots[0].src}
          alt={screenshots[0].alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 1120px) 50vw, 560px"
          unoptimized
        />
        <span className="project-preview-cta">
          View screenshots <span aria-hidden="true">↗</span>
        </span>
        <span className="project-screenshot-count">
          {screenshots.length} images
        </span>
      </button>

      <dialog
        className="gallery-dialog"
        ref={dialogRef}
        aria-label={`${projectName} screenshots`}
        onClose={closeGallery}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeGallery();
        }}
      >
        {activeScreenshot && activeIndex !== null && (
          <div className="gallery-content">
            <div className="gallery-toolbar">
              <span className="gallery-project-name">{projectName}</span>
              <span className="gallery-position">
                {activeIndex + 1} / {screenshots.length}
              </span>
              <button
                className="gallery-close"
                type="button"
                aria-label="Close screenshots"
                autoFocus
                onClick={closeGallery}
              >
                ×
              </button>
            </div>
            <div className="gallery-image-wrap">
              <Image
                className="gallery-image"
                src={activeScreenshot.src}
                alt={activeScreenshot.alt}
                fill
                sizes="100vw"
                unoptimized
              />
            </div>
            <div className="gallery-caption-row">
              <p className="gallery-caption">{activeScreenshot.caption}</p>
              {screenshots.length > 1 && (
                <div className="gallery-navigation">
                  <button
                    className="gallery-nav-button"
                    type="button"
                    aria-label="Previous screenshot"
                    onClick={() =>
                      setActiveIndex(
                        (activeIndex - 1 + screenshots.length) %
                          screenshots.length,
                      )
                    }
                  >
                    ←
                  </button>
                  <button
                    className="gallery-nav-button"
                    type="button"
                    aria-label="Next screenshot"
                    onClick={() =>
                      setActiveIndex((activeIndex + 1) % screenshots.length)
                    }
                  >
                    →
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
