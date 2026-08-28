"use client";

import { useEffect, useState } from "react";

const youtubeUrl = "https://www.youtube.com/@Shalom-w2h/streams";

function isSundayLivestreamTime(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value;
  const hour = Number(value("hour"));
  const minute = Number(value("minute"));
  const minutesAfterMidnight = hour * 60 + minute;

  return value("weekday") === "Sunday"
    && minutesAfterMidnight >= 10 * 60 + 30
    && minutesAfterMidnight < 12 * 60 + 30;
}

export default function LiveStreamBanner() {
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const update = () => setIsLive(isSundayLivestreamTime(new Date()));
    update();
    const timer = window.setInterval(update, 30_000);
    return () => window.clearInterval(timer);
  }, []);

  if (!isLive) return null;

  return (
    <aside className="live-stream-banner" aria-label="Shalom is live on YouTube">
      <span className="live-stream-status" aria-hidden="true"><i /></span>
      <strong>WE’RE LIVE — SUNDAY WORSHIP</strong>
      <span className="live-stream-divider" aria-hidden="true" />
      <a href={youtubeUrl} target="_blank" rel="noreferrer">
        WATCH ON YOUTUBE <span aria-hidden="true">→</span>
      </a>
    </aside>
  );
}
