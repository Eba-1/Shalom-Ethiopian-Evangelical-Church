"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

const moments = [
  { number: "01", title: "Sunday Worship", image: "/gallery/sunday-worship.webp", className: "gallery-story-feature", alt: "Congregation worshiping during Sunday service" },
  { number: "02", title: "Worship Team", image: "/gallery/worship-team.webp", className: "gallery-story-team", alt: "Shalom worship team leading the congregation" },
  { number: "03", title: "Communion", image: "/gallery/communion.webp", className: "gallery-story-communion", alt: "Church members sharing communion" },
  { number: "04", title: "Prayer", image: "/gallery/prayer.webp", className: "gallery-story-prayer", alt: "A worshiper praying during service" },
  { number: "05", title: "Church Family", image: "/gallery/church-family.webp", className: "gallery-story-family", alt: "Members of the Shalom church family together" },
  { number: "06", title: "All Generations", image: "/gallery/all-generations.webp", className: "gallery-story-generations", alt: "A parent and child participating in church" },
];

export default function GalleryShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`gallery-story ${isVisible ? "is-visible" : ""}`} id="gallery" aria-labelledby="gallery-story-title">
      <div className="gallery-story-heading">
        <div>
          <p className="gallery-story-eyebrow">LIFE AT SHALOM</p>
          <h2 id="gallery-story-title">Faith in motion.</h2>
          <p className="gallery-story-intro">Moments of worship, community, and grace.</p>
        </div>
      </div>

      <div className="gallery-story-canvas">
        <span className="gallery-story-word" aria-hidden="true">MOMENTS</span>
        <span className="gallery-story-stone gallery-story-stone-one" aria-hidden="true" />
        <span className="gallery-story-stone gallery-story-stone-two" aria-hidden="true" />
        <svg className="gallery-story-orbit" viewBox="0 0 420 300" aria-hidden="true">
          <path d="M10 25 C285 5 385 65 386 272" />
          <circle cx="386" cy="272" r="5" />
        </svg>

        {moments.map((moment, index) => (
          <article
            className={`gallery-story-card ${moment.className}`}
            key={moment.title}
            style={{ "--reveal-delay": `${index * 110}ms` } as CSSProperties}
          >
            <div className="gallery-story-image-wrap">
              <img src={moment.image} alt={moment.alt} loading={index === 0 ? "eager" : "lazy"} />
            </div>
            <div className="gallery-story-label">
              <span>{moment.number}</span>
              <b>{moment.title}</b>
            </div>
          </article>
        ))}
      </div>

      <a className="gallery-story-action" href="/gallery">
        EXPLORE THE FULL GALLERY <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
