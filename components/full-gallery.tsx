"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";

type GalleryCategory = "Worship" | "Community" | "Fellowship" | "Children" | "Outreach";

type GalleryPhoto = {
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  featured?: boolean;
};

// Add future photos here. Place the optimized image in public/gallery/full,
// then copy one of these objects and update its four text fields.
const galleryPhotos: GalleryPhoto[] = [
  { src: "/gallery/sunday-worship.webp", alt: "Congregation worshiping during Sunday service", title: "Sunday Worship", category: "Worship", featured: true },
  { src: "/gallery/full/community-outreach.webp", alt: "Shalom members sharing the hope of Jesus in the community", title: "Sharing Hope", category: "Outreach" },
  { src: "/gallery/full/joyful-worship.webp", alt: "The congregation worshiping together with joy", title: "Joyful Praise", category: "Worship" },
  { src: "/gallery/full/children-together.webp", alt: "Children spending time together at Shalom", title: "Growing Together", category: "Children" },
  { src: "/gallery/worship-team.webp", alt: "The Shalom worship team leading the congregation", title: "Worship Team", category: "Worship" },
  { src: "/gallery/full/brothers-fellowship.webp", alt: "Church members preparing food together", title: "Serving Together", category: "Fellowship", featured: true },
  { src: "/gallery/full/church-community.webp", alt: "Members of the Shalom church community gathered together", title: "Church Family", category: "Community" },
  { src: "/gallery/communion.webp", alt: "Church members sharing communion", title: "At the Table", category: "Worship" },
  { src: "/gallery/full/cultural-celebration.webp", alt: "Members celebrating Ethiopian culture together", title: "Culture & Community", category: "Community" },
  { src: "/gallery/full/choir-celebration.webp", alt: "The Shalom choir leading a celebration", title: "One Voice", category: "Worship" },
  { src: "/gallery/prayer.webp", alt: "A worshiper praying during service", title: "In Prayer", category: "Worship" },
  { src: "/gallery/church-family.webp", alt: "Members of the Shalom church family together", title: "Belonging", category: "Community" },
  { src: "/gallery/full/young-adult-worship.webp", alt: "A young adult worshiping with the church community", title: "Faith Alive", category: "Fellowship" },
  { src: "/gallery/all-generations.webp", alt: "A parent and child participating in church", title: "All Generations", category: "Children" },
  { src: "/gallery/full/the-word.webp", alt: "A church leader speaking from the pulpit", title: "The Word", category: "Worship" },
  { src: "/gallery/full/fellowship-conversation.webp", alt: "Church members sharing conversation during fellowship", title: "Together in Fellowship", category: "Fellowship" },
  { src: "/gallery/full/communion-women.webp", alt: "Women receiving communion together", title: "Remembering Christ", category: "Worship" },
  { src: "/gallery/full/communion-reflection.webp", alt: "A woman reflecting during communion", title: "A Sacred Moment", category: "Worship" },
  { src: "/gallery/full/young-communion.webp", alt: "A young church member participating in communion", title: "Faith Across Generations", category: "Children" },
  { src: "/gallery/full/serving-communion.webp", alt: "Church members serving communion", title: "Serving His Table", category: "Worship" },
  { src: "/gallery/full/father-and-child.webp", alt: "A father and young child participating in communion", title: "Faith Passed On", category: "Children", featured: true },
  { src: "/gallery/full/communion-grace.webp", alt: "A woman receiving communion with the congregation", title: "Grace at the Table", category: "Worship" },
  { src: "/gallery/full/congregation-praise.webp", alt: "Members of the congregation singing and worshiping", title: "One Congregation", category: "Community" },
  { src: "/gallery/full/communion-cup.webp", alt: "A worshiper holding a communion cup", title: "In Remembrance", category: "Worship" },
  { src: "/gallery/full/quiet-reflection.webp", alt: "A woman in quiet reflection during service", title: "Quiet Grace", category: "Worship" },
  { src: "/gallery/full/next-generation.webp", alt: "Young people participating in church together", title: "The Next Generation", category: "Children" },
  { src: "/gallery/full/women-serving.webp", alt: "Women serving the congregation together", title: "Hands of Service", category: "Fellowship" },
  { src: "/gallery/full/communion-together.webp", alt: "Church members sharing communion as one family", title: "At One Table", category: "Community" },
  { src: "/gallery/full/prayerful-heart.webp", alt: "A man worshiping with a prayerful heart", title: "A Prayerful Heart", category: "Worship" },
  { src: "/gallery/full/hands-raised.webp", alt: "A worshiper lifting his hands in prayer", title: "Hands Raised", category: "Worship" },
  { src: "/gallery/full/heartfelt-worship.webp", alt: "A woman worshiping with her hand over her heart", title: "Heartfelt Worship", category: "Worship" },
  { src: "/gallery/full/deep-in-prayer.webp", alt: "A man deeply engaged in prayer", title: "Deep in Prayer", category: "Worship" },
  { src: "/gallery/full/celebration-praise.webp", alt: "The congregation celebrating together in praise", title: "Celebration Praise", category: "Community" },
  { src: "/gallery/full/joy-in-worship.webp", alt: "A woman singing joyfully during worship", title: "Joy in Worship", category: "Worship" },
  { src: "/gallery/full/children-friendship.webp", alt: "Children enjoying friendship and fellowship together", title: "Little Friends", category: "Children" },
  { src: "/gallery/full/children-at-play.webp", alt: "Young children playing together at church", title: "Joyful Childhood", category: "Children" },
];

const categories = ["All", "Worship", "Community", "Fellowship", "Children", "Outreach"] as const;
const INITIAL_COUNT = 9;

export default function FullGallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const filteredPhotos = useMemo(
    () => activeCategory === "All" ? galleryPhotos : galleryPhotos.filter((photo) => photo.category === activeCategory),
    [activeCategory],
  );

  const visiblePhotos = filteredPhotos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPhotos.length;

  function selectCategory(category: (typeof categories)[number]) {
    setActiveCategory(category);
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <section className="full-gallery" aria-labelledby="full-gallery-title">
      <div className="full-gallery-intro">
        <div>
          <p className="full-gallery-kicker">LIFE AT SHALOM</p>
          <h1 id="full-gallery-title">Faith in<br /><em>motion.</em></h1>
        </div>
        <div className="full-gallery-intro-copy">
          <span aria-hidden="true" />
          <p>Moments of worship, community, and grace—shared across generations.</p>
        </div>
        <span className="full-gallery-watermark" aria-hidden="true">MOMENTS</span>
      </div>

      <div className="gallery-filter-wrap">
        <p>EXPLORE BY CATEGORY</p>
        <div className="gallery-filters" role="group" aria-label="Filter gallery photos">
          {categories.map((category) => (
            <button
              type="button"
              className={activeCategory === category ? "active" : ""}
              aria-pressed={activeCategory === category}
              onClick={() => selectCategory(category)}
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="full-gallery-grid" aria-live="polite">
        {visiblePhotos.map((photo, index) => (
          <figure
            className={`full-gallery-card ${photo.featured ? "featured" : ""}`}
            style={{ "--gallery-delay": `${(index % INITIAL_COUNT) * 65}ms` } as CSSProperties}
            key={photo.src}
          >
            <div className="full-gallery-image">
              <img src={photo.src} alt={photo.alt} loading={index < 3 ? "eager" : "lazy"} />
            </div>
            <figcaption>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><b>{photo.title}</b><small>{photo.category}</small></div>
            </figcaption>
          </figure>
        ))}
      </div>

      {hasMore && (
        <button className="gallery-load-more" type="button" onClick={() => setVisibleCount((count) => count + 6)}>
          LOAD MORE MOMENTS <span aria-hidden="true">＋</span>
        </button>
      )}

      <p className="gallery-future-note">More moments will be added as our church family continues to grow.</p>
    </section>
  );
}
